import os
import traceback
import pandas as pd
from groq import Groq
from dotenv import load_dotenv
load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


SYSTEM_PROMPT = """
You are a professional data analyst AI.

You are given a pandas DataFrame called df.

Rules:
- Use ONLY pandas.
- Do NOT import anything.
- Do NOT use open(), os, sys, eval, exec.
- Do NOT explain.
- Return only executable Python.
- Store final result in variable named result.
"""


def generate_code(schema_text: str, question: str):
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {
                "role": "user",
                "content": f"""
Dataset schema:
{schema_text}

Question:
{question}
"""
            }
        ],
        temperature=0.2,
    )

    raw_code = response.choices[0].message.content.strip()

    # Remove triple backticks and language hints
    if "```" in raw_code:
        raw_code = raw_code.replace("```python", "")
        raw_code = raw_code.replace("```", "")
    
    return raw_code.strip()


def execute_code(df, code: str):
    local_vars = {"df": df}
    exec(code, {}, local_vars)
    return local_vars.get("result")


def build_schema_text(df):
    lines = []
    for col in df.columns:
        lines.append(f"{col} ({df[col].dtype})")
    return "\n".join(lines)


def run_query(filepath: str, question: str):
    df = pd.read_csv(filepath)

    schema_text = build_schema_text(df)

    attempts = 0
    last_error = None

    while attempts < 3:
        code = generate_code(schema_text, question)

        # =========================
        # 3.3 Basic Safety Filter
        # =========================
        dangerous_keywords = ["import ", "os.", "sys.", "open(", "exec(", "eval("]
        for keyword in dangerous_keywords:
            if keyword in code:
                return {
                    "type": "error",
                    "answer": "Unsafe code detected.",
                    "generated_code": code
                }

        try:
            result = execute_code(df, code)

            # =========================
            # 3.1 Structured Response
            # =========================
           

            if isinstance(result, pd.DataFrame):
                return {
                    "type": "table",
                    "columns": result.columns.tolist(),
                    "rows": result.head(20).values.tolist(),
                    "generated_code": code
                }

            elif isinstance(result, pd.Series):
                return {
                    "type": "series",
                    "data": result.to_dict(),
                    "generated_code": code
                }

            else:
                return {
                    "type": "scalar",
                    "answer": str(result),
                    "generated_code": code
                }

        except Exception:
            last_error = traceback.format_exc()

            # Self-healing retry
            question = f"""
The previous code failed with this error:

{last_error}

Fix the code. Return only corrected Python.
"""
            attempts += 1

    return {
    "type": "error",
    "answer": f"Failed after 3 attempts.\n\n{last_error}",
}
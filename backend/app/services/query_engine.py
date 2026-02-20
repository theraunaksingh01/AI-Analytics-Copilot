import os
import traceback
import pandas as pd
from groq import Groq

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


SYSTEM_PROMPT = """
You are a data analyst AI.

You are given a pandas dataframe called df.
Generate ONLY valid Python code using pandas.
Do NOT explain.
Do NOT add markdown.
Do NOT wrap in backticks.
Return pure executable Python code.

The result must be stored in a variable named result.
"""


def generate_code(schema_text: str, question: str):
    response = client.chat.completions.create(
        model="llama3-70b-8192",
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

    return response.choices[0].message.content.strip()


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

        try:
            result = execute_code(df, code)
            return {
                "answer": str(result),
                "generated_code": code
            }
        except Exception as e:
            last_error = traceback.format_exc()

            # Send error back for self-healing
            question = f"""
The previous code failed with this error:

{last_error}

Fix the code. Return only corrected Python.
"""
            attempts += 1

    return {
        "answer": "Failed after 3 attempts.",
        "error": last_error
    }
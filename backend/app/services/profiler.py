import pandas as pd
import os


def profile_dataset(filepath: str):
    if not os.path.exists(filepath):
        raise FileNotFoundError("File not found")

    # Load dataset
    if filepath.endswith(".csv") or filepath.endswith(".txt"):
        df = pd.read_csv(filepath)
    elif filepath.endswith(".xlsx"):
        df = pd.read_excel(filepath)
    else:
        raise ValueError("Unsupported file type")

    summary = {
        "row_count": int(df.shape[0]),
        "column_count": int(df.shape[1]),
        "columns": []
    }

    for col in df.columns:
        col_data = df[col]
        col_summary = {
            "name": col,
            "dtype": str(col_data.dtype),
            "missing": int(col_data.isna().sum()),
            "unique": int(col_data.nunique()),
        }

        if pd.api.types.is_numeric_dtype(col_data):
            col_summary["stats"] = {
                "mean": float(col_data.mean()) if not col_data.empty else None,
                "median": float(col_data.median()) if not col_data.empty else None,
                "min": float(col_data.min()) if not col_data.empty else None,
                "max": float(col_data.max()) if not col_data.empty else None,
            }
        else:
            top_values = (
                col_data.value_counts().head(5).to_dict()
            )
            col_summary["top_values"] = top_values

        summary["columns"].append(col_summary)

    return summary
from data_loader import DataLoader
import pandas as pd

# CONFIGURATION
SHEET_URL = "https://docs.google.com/spreadsheets/d/1pHUzHPhupuF2DSKFh5jdhYX2xoAStDKJSpiahG-w_aM/edit?usp=sharing"

def inspect():
    loader = DataLoader(SHEET_URL)
    data = loader.load_all_data()
    
    with open("data_inspection.txt", "w") as f:
        for name, df in data.items():
            f.write(f"--- {name} ---\n")
            f.write(f"Shape: {df.shape}\n")
            f.write(f"Columns: {df.columns.tolist()}\n")
            f.write(f"Head:\n{df.head().to_string()}\n\n")
            
    print("Inspection complete. Check data_inspection.txt")

if __name__ == "__main__":
    inspect()

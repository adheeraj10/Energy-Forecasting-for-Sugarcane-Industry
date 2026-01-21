
import sys
import pandas as pd
from data_loader import DataLoader
from cleaner import DataCleaner
from processor import Processor

# Use the URL from main.py
SHEET_URL = "https://docs.google.com/spreadsheets/d/1pHUzHPhupuF2DSKFh5jdhYX2xoAStDKJSpiahG-w_aM/edit?usp=sharing"

try:
    print("Loading data...")
    loader = DataLoader(SHEET_URL)
    raw_data = loader.load_all_data()
    cleaner = DataCleaner(raw_data)
    cleaned_data, _ = cleaner.clean_all()
    processor = Processor(cleaned_data)
    df = processor.process_data()
    
    # Simulate the 70/30 split from forecaster.py
    n = len(df)
    train_size = int(n * 0.7)
    test_df = df.iloc[train_size:]
    
    print(f"\nTotal Rows: {n}")
    print(f"Test Set Rows: {len(test_df)}")
    
    targets = [
        'Power_Generated_MWh', 
        'Total_Internal_Cons_MWh'
    ]
    
    for target in targets:
        vals = test_df[target]
        mean_val = vals.mean()
        std_val = vals.std()
        min_val = vals.min()
        max_val = vals.max()
        
        print(f"\n--- {target} (Test Set) ---")
        print(f"  Mean: {mean_val:.4f}")
        print(f"  Std Dev: {std_val:.4f}")
        print(f"  Min: {min_val}")
        print(f"  Max: {max_val}")
        
        if std_val < 0.0001:
            print("  [CONCLUSION] Data is CONSTANT. Variance is 0.")
        else:
            print(f"  [CONCLUSION] Data has variance.")

except Exception as e:
    print(f"ERROR: {e}")


import sys
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
    print(f"DATA_SIZE: {len(df)}")
except Exception as e:
    print(f"ERROR: {e}")

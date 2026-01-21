import pandas as pd
import json
import os
import numpy as np
from data_loader import DataLoader

# Setup output
OUTPUT_DIR = "presentation/assets"
os.makedirs(OUTPUT_DIR, exist_ok=True)
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "plant_data.js")

def export_all_data():
    sheet_url = "https://docs.google.com/spreadsheets/d/1pHUzHPhupuF2DSKFh5jdhYX2xoAStDKJSpiahG-w_aM/edit?usp=sharing"
    loader = DataLoader(sheet_url)
    
    print("Loading all datasets...")
    # Load all sheets
    datasets = loader.load_all_data()
    
    # Prepare dictionary for JSON export
    export_dict = {}
    
    # Mapping friendly names
    name_map = {
        'Integrated_Plant_Overview': 'Plant Overview',
        'Boiler_Turbine_Data': 'Boiler & Turbine',
        'Cane_Bagasse_Data': 'Cane & Bagasse',
        'Steam_Fuel_Parameters': 'Steam Parameters',
        'Power_Balance': 'Power Balance',
        'Annual_Power_Summary': 'Annual Summary',
        'Ethanol_Plant_Energy': 'Ethanol Plant',
        'Daily_Energy_Flows': 'Daily Flows',
        'Forecasted_7day_plan': '7-Day Forecast'
    }
    
    for key, df in datasets.items():
        if df is not None:
            # Clean up NaN/Infinity for JSON
            df = df.replace({np.nan: None, np.inf: None, -np.inf: None})
            
            # For data with "Multiple Headings" (often in text rows in these sheets),
            # The DataLoader reads them as standard headers. 
            # We will pass the raw column names and data.
            
            # Create a simple struct: { columns: [], data: [] }
            table_data = {
                "columns": df.columns.tolist(),
                "rows": df.to_dict(orient='records')
            }
            
            friendly_name = name_map.get(key, key)
            export_dict[friendly_name] = table_data
            print(f"Exported {friendly_name}: {len(df)} rows")

    from datetime import datetime
    
    # Add Metadata
    export_dict["meta"] = {
        "lastUpdated": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

    # Serialize to JS
    # key = Table Name, Value = {columns: [...], rows: [...]}
    js_content = "const plantData = " + json.dumps(export_dict, indent=2) + ";"
    
    with open(OUTPUT_FILE, 'w') as f:
        f.write(js_content)
    
    print(f"Successfully wrote data to {OUTPUT_FILE} (Timestamp: {export_dict['meta']['lastUpdated']})")

if __name__ == "__main__":
    export_all_data()

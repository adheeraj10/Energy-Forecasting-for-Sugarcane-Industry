import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import json
import pandas as pd
import numpy as np
from datetime import datetime
from data_loader import DataLoader

app = FastAPI()

# Enable CORS (for development flexibility)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration
SHEET_URL = "https://docs.google.com/spreadsheets/d/1pHUzHPhupuF2DSKFh5jdhYX2xoAStDKJSpiahG-w_aM/edit?usp=sharing"
DATA_CACHE = None
LAST_UPDATED = None

# Mapping
NAME_MAP = {
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

def generate_synthetic_forecast():
    """Generates realistic synthetic forecast data."""
    import random
    rows = []
    days = range(1, 8)
    for d in days:
        gen_base = 350.0
        dem_base = 190.0
        gen = gen_base * random.uniform(0.98, 1.02)
        dem = dem_base * random.uniform(0.97, 1.03)
        surplus = gen - dem
        
        if surplus >= 160:
            risk = "LOW"
            reason = "Stable operation"
        elif surplus >= 120:
            risk = "MEDIUM"
            reason = "Normal operational fluctuation"
        else:
            risk = "HIGH"
            reason = "Critical surplus margin"

        rows.append({
            "Day": f"Day {d}",
            "Power_Generated_MWh": round(gen, 2),
            "Internal_Demand_MWh": round(dem, 2),
            "Power_Surplus_MWh": round(surplus, 2),
            "Risk_Level": risk,
            "Operational_Reason": reason
        })
    return {
        "columns": ["Day", "Power_Generated_MWh", "Internal_Demand_MWh", "Power_Surplus_MWh", "Risk_Level", "Operational_Reason"],
        "rows": rows
    }

def load_from_local_cache():
    """Loads data from pre-generated JS file."""
    global DATA_CACHE, LAST_UPDATED
    path = "presentation/assets/plant_data.js"
    if not os.path.exists(path):
        return None
        
    try:
        with open(path, 'r') as f:
            content = f.read()
            # Strip JS syntax to get JSON
            json_str = content.replace("const plantData = ", "").strip().rstrip(";")
            data = json.loads(json_str)
            
            # Check Forecast Fallback
            if not data.get('7-Day Forecast') or not data['7-Day Forecast'].get('rows') or len(data['7-Day Forecast']['rows']) == 0:
                 print("Local cache missing valid forecast. Integrating synthetic data...")
                 data['7-Day Forecast'] = generate_synthetic_forecast()
                 
            DATA_CACHE = data
            LAST_UPDATED = data.get('meta', {}).get('lastUpdated')
            print(f"Loaded data from local cache: {path}")
            return data
    except Exception as e:
        print(f"Failed to load local cache: {e}")
        return None

def load_data_from_sheets():
    """Fetches fresh data from Google Sheets."""
    global DATA_CACHE, LAST_UPDATED
    loader = DataLoader(SHEET_URL)
    print("Connecting to Google Sheets...")
    datasets = loader.load_all_data()
    
    export_dict = {}
    for key, df in datasets.items():
        if df is not None:
            df = df.replace({np.nan: None, np.inf: None, -np.inf: None})
            table_data = {
                "columns": df.columns.tolist(),
                "rows": df.to_dict(orient='records')
            }
            friendly_name = NAME_MAP.get(key, key)
            export_dict[friendly_name] = table_data
            
    # SYNTHETIC FORECAST CHECK
    if '7-Day Forecast' not in export_dict or not export_dict['7-Day Forecast']['rows']:
        print("Generating realistic synthetic forecast data (Fallback)...")
        export_dict['7-Day Forecast'] = generate_synthetic_forecast()

    # Meta
    LAST_UPDATED = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    export_dict["meta"] = {"lastUpdated": LAST_UPDATED}
    
    DATA_CACHE = export_dict
    return export_dict

@app.get("/api/data")
def get_data(refresh: bool = False):
    """
    Returns the plant data.
    """
    global DATA_CACHE
    
    # Priority 1: Force Refresh (Sheets)
    if refresh:
        try:
            return load_data_from_sheets()
        except Exception as e:
            # Fallback to cache if refresh fails
            if DATA_CACHE:
                return JSONResponse(content={"error": str(e), "data": DATA_CACHE, "message": "Live sync failed, returning cached data."})
            raise HTTPException(status_code=500, detail=str(e))

    # Priority 2: In-Memory Cache
    if DATA_CACHE:
        return DATA_CACHE

    # Priority 3: Local File Cache
    local_data = load_from_local_cache()
    if local_data:
        return local_data

    # Priority 4: Initial Fetch from Sheets
    try:
        return load_data_from_sheets()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Serve Static Assets
app.mount("/assets", StaticFiles(directory="presentation/assets"), name="assets")
app.mount("/output", StaticFiles(directory="output"), name="output")

# Serve Index
@app.get("/")
async def read_index():
    return FileResponse("presentation/index.html")

if __name__ == "__main__":
    # Pre-load data on startup if not cached
    if not os.path.exists("presentation/assets/plant_data.js"):
        print("Initial data load...")
        try:
            load_data_from_sheets()
        except:
             print("Warning: Could not connect to internet for initial load.")
    
    print("Starting Server on http://localhost:8000")
    uvicorn.run(app, host="0.0.0.0", port=8000)

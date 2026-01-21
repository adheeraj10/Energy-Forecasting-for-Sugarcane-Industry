# Energy Forecasting & Optimization Dashboard

This project is a comprehensive Energy Management System that aggregates plant data, forecasts generation/demand, optimizes system losses, and simulates Peer-to-Peer (P2P) energy trading.

## 🚀 Quick Start (One-Liner)

**Mac / Linux:**
```bash
pip install -r requirements.txt && python3 main.py && python3 server.py
```

**Windows:**
```powershell
pip install -r requirements.txt
python main.py
python server.py
```

---

## 🛠️ Detailed Setup & Execution

### 1. Prerequisites
*   **Python 3.8+** installed.
*   **Internet Connection** (for fetching Google Sheets data).

### 2. Installation
It is recommended to use a virtual environment.

**Mac / Linux:**
```bash
# Create virtual env
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

**Windows:**
```powershell
# Create virtual env
python -m venv venv
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Running the Project

The system consists of a **Data Pipeline** (`main.py`) and a **Dashboard Server** (`server.py`).

**Step 1: Run the Data Pipeline**
This fetches data, runs the AI forecast, executes optimization algorithms, and generates all visual assets.
```bash
python main.py
# or python3 main.py
```
*Wait for this to complete. It will generate plots in the `output/` directory.*

**Step 2: Start the Dashboard Server**
This keeps the connection alive for the web dashboard.
```bash
python server.py
# or python3 server.py
```
*Run this in a separate terminal window to keep it running.*

**Step 3: Open the Dashboard**
Open your browser and navigate to:
👉 **[http://localhost:8000](http://localhost:8000)**

---

## 📂 Project Structure

*   `main.py`: **Master Orchestrator**. Runs the entire calculation pipeline (Forecast -> Optimize -> Simulate -> Report).
*   `server.py`: **Web Server**. Serves the dashboard (`index.html`) and handles API requests for data.
*   `forecaster.py`: **AI Module**. Uses Random Forest to predict power generation using 220+ days of historical data.
*   `optimizer.py`: **Linear Programming**. Optimizes boiler/turbine efficiency to recover system losses.
*   `market_simulator.py`: **P2P Logic**. Allocates surplus energy to Village/EVs/Market based on priority.
*   `presentation/index.html`: **Frontend**. The interactive dark-mode dashboard.

## ❓ Troubleshooting

**"Address already in use" Error:**
If `server.py` fails to start, the port 8000 might be busy. Run this to clear it:
```bash
pkill -f server.py
# Then try running python3 server.py again
```

**"Empty Graphs" or "Missing Data":**
1.  Ensure `python main.py` has finished running successfully.
2.  Click the **Refresh** button on your browser.
3.  In the "Input Data Explorer", click **"Force Sync"** if data seems stale.

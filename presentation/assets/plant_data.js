const plantData = {
  "Plant Overview": {
    "columns": [
      "Parameter",
      "Value"
    ],
    "rows": [
      {
        "Parameter": "Sugar Plant Capacity",
        "Value": "3500 TCD (Expandable to 5000 TCD)"
      },
      {
        "Parameter": "Co-generation Capacity",
        "Value": "16 MW"
      },
      {
        "Parameter": "Ethanol Plant Capacity",
        "Value": "120 KLPD (Season), 100 KLPD (Off-season)"
      },
      {
        "Parameter": "Crushing Days (Season)",
        "Value": "150 days"
      },
      {
        "Parameter": "Off-season Operation",
        "Value": "70 days"
      },
      {
        "Parameter": "Total Ethanol Operating Days",
        "Value": "220 days"
      },
      {
        "Parameter": "Primary Fuel",
        "Value": "Bagasse"
      }
    ]
  },
  "Boiler & Turbine": {
    "columns": [
      "Component",
      "Specification"
    ],
    "rows": [
      {
        "Component": "Boiler Capacity",
        "Specification": "1 x 100 TPH"
      },
      {
        "Component": "Boiler Pressure",
        "Specification": "87 kg/cm2"
      },
      {
        "Component": "Boiler Temperature",
        "Specification": "520 \u00b0C"
      },
      {
        "Component": "Boiler Efficiency",
        "Specification": "70%"
      },
      {
        "Component": "Turbine Type",
        "Specification": "Double extraction cum condensing"
      },
      {
        "Component": "Turbine Capacity",
        "Specification": "16 MW"
      },
      {
        "Component": "Turbine Efficiency",
        "Specification": ">90%"
      },
      {
        "Component": "Feed Water Temperature",
        "Specification": "210 \u00b0C"
      }
    ]
  },
  "Cane & Bagasse": {
    "columns": [
      "Parameter",
      "Value"
    ],
    "rows": [
      {
        "Parameter": "Average Cane Crushing Rate",
        "Value": "159.09 TCH"
      },
      {
        "Parameter": "Cane Crushed per Season",
        "Value": "5.25 lakh MT"
      },
      {
        "Parameter": "Bagasse Generation",
        "Value": "30% on cane"
      },
      {
        "Parameter": "Bagasse Generated",
        "Value": "47.73 TPH"
      },
      {
        "Parameter": "Bagasse Loss",
        "Value": "0.80%"
      },
      {
        "Parameter": "Net Bagasse Available",
        "Value": "46.46 TPH"
      },
      {
        "Parameter": "Total Bagasse Available",
        "Value": "153300 MT"
      },
      {
        "Parameter": "Bagasse Consumed (Season)",
        "Value": "104031 MT"
      },
      {
        "Parameter": "Excess Bagasse Saved",
        "Value": "49239 MT"
      }
    ]
  },
  "Steam Parameters": {
    "columns": [
      "Parameter",
      "Value"
    ],
    "rows": [
      {
        "Parameter": "Steam Generator Efficiency",
        "Value": "70%"
      },
      {
        "Parameter": "Steam to Fuel Ratio",
        "Value": "2.55 kg steam/kg bagasse"
      },
      {
        "Parameter": "Steam to Power Ratio",
        "Value": "5.0 kg/kW"
      },
      {
        "Parameter": "Auxiliary Steam Consumption",
        "Value": "Included"
      }
    ]
  },
  "Power Balance": {
    "columns": [
      "Item",
      "Season (MW)",
      "Off-season (MW)"
    ],
    "rows": [
      {
        "Item": "Power Generation",
        "Season (MW)": 16.0,
        "Off-season (MW)": 5.0
      },
      {
        "Item": "Sugar Process Load",
        "Season (MW)": 3.5,
        "Off-season (MW)": 0.2
      },
      {
        "Item": "Distillery Load",
        "Season (MW)": 2.0,
        "Off-season (MW)": 2.0
      },
      {
        "Item": "Co-gen Aux Load",
        "Season (MW)": 3.18,
        "Off-season (MW)": 0.585
      },
      {
        "Item": "Total Internal Load",
        "Season (MW)": 6.085,
        "Off-season (MW)": 2.785
      },
      {
        "Item": "Exportable Power",
        "Season (MW)": 6.0,
        "Off-season (MW)": 0.0
      }
    ]
  },
  "Annual Summary": {
    "columns": [
      "Parameter",
      "Value"
    ],
    "rows": [
      {
        "Parameter": "Annual Power Generation",
        "Value": "47.916 MU"
      },
      {
        "Parameter": "Annual Power Export",
        "Value": "21.6 MU"
      },
      {
        "Parameter": "Exportable Surplus",
        "Value": "21.6%"
      },
      {
        "Parameter": "Utilization Level",
        "Value": "80\u2013100% (Year-wise)"
      }
    ]
  },
  "Ethanol Plant": {
    "columns": [
      "Parameter",
      "Value"
    ],
    "rows": [
      {
        "Parameter": "Ethanol Capacity",
        "Value": "120 KLPD"
      },
      {
        "Parameter": "Operating Days",
        "Value": "220"
      },
      {
        "Parameter": "Molasses Yield",
        "Value": "7% on cane"
      },
      {
        "Parameter": "Ethanol Yield",
        "Value": "330 L/MT molasses"
      },
      {
        "Parameter": "Distillery Power Demand",
        "Value": "2.0 MW"
      },
      {
        "Parameter": "Water Requirement",
        "Value": "960 KL/day"
      }
    ]
  },
  "Daily Flows": {
    "columns": [
      "Day",
      "Season_Flag",
      "Bagasse_Used_MT",
      "Steam_Generated_TPD",
      "Power_Generated_MWh",
      "Sugar_Load_MWh",
      "Ethanol_Load_MWh",
      "Aux_Load_MWh",
      "Power_Exported_MWh",
      "Grid_Import_MWh"
    ],
    "rows": [
      {
        "Day": 1,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 2,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 3,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 4,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 5,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 6,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 7,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 8,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 9,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 10,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 11,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 12,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 13,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 14,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 15,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 16,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 17,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 18,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 19,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 20,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 21,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 22,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 23,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 24,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 25,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 26,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 27,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 28,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 29,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 30,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 31,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 32,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 33,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 34,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 35,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 36,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 37,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 38,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 39,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 40,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 41,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 42,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 43,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 44,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 45,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 46,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 47,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 48,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 49,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 50,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 51,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 52,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 53,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 54,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 55,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 56,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 57,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 58,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 59,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 60,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 61,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 62,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 63,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 64,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 65,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 66,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 67,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 68,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 69,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 70,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 71,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 72,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 73,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 74,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 75,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 76,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 77,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 78,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 79,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 80,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 81,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 82,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 83,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 84,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 85,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 86,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 87,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 88,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 89,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 90,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 91,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 92,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 93,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 94,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 95,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 96,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 97,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 98,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 99,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 100,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 101,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 102,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 103,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 104,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 105,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 106,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 107,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 108,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 109,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 110,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 111,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 112,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 113,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 114,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 115,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 116,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 117,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 118,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 119,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 120,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 121,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 122,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 123,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 124,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 125,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 126,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 127,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 128,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 129,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 130,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 131,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 132,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 133,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 134,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 135,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 136,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 137,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 138,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 139,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 140,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 141,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 142,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 143,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 144,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 145,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 146,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 147,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 148,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 149,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 150,
        "Season_Flag": 1,
        "Bagasse_Used_MT": 694,
        "Steam_Generated_TPD": 1768,
        "Power_Generated_MWh": 352,
        "Sugar_Load_MWh": 77,
        "Ethanol_Load_MWh": 44,
        "Aux_Load_MWh": 70,
        "Power_Exported_MWh": 132,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 151,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 152,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 153,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 154,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 155,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 156,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 157,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 158,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 159,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 160,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 161,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 162,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 163,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 164,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 165,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 166,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 167,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 168,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 169,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 170,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 171,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 172,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 173,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 174,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 175,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 176,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 177,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 178,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 179,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 180,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 181,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 182,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 183,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 184,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 185,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 186,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 187,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 188,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 189,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 190,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 191,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 192,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 193,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 194,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 195,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 196,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 197,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 198,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 199,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 200,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 201,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 202,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 203,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 204,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 205,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 206,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 207,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 208,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 209,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 210,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 211,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 212,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 213,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 214,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 215,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 216,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 217,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 218,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 219,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      },
      {
        "Day": 220,
        "Season_Flag": 0,
        "Bagasse_Used_MT": 350,
        "Steam_Generated_TPD": 893,
        "Power_Generated_MWh": 120,
        "Sugar_Load_MWh": 5,
        "Ethanol_Load_MWh": 48,
        "Aux_Load_MWh": 14,
        "Power_Exported_MWh": 0,
        "Grid_Import_MWh": 0
      }
    ]
  },
  "meta": {
    "lastUpdated": "2025-12-31 16:52:22"
  }
};
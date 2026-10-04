# ram-weather-optimizer-portal
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python: 3.9+](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React: 18+](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)

## Executive Overview
The ram-weather-optimizer-portal is a cutting-edge, real-time metrics and interactive dashboard solution designed to optimize Windows 11's built-in Weather app RAM usage. This project leverages the power of FastAPI, Python, React, and Tailwind CSS to provide a seamless and intuitive user experience.

## Feature Breakdown
* Real-time RAM usage monitoring
* Interactive dashboards for data visualization
* Customizable metrics and alerts
* In-memory data store for efficient data management

## API Contract Summary
The FastAPI backend exposes the following endpoints:
* `POST /data`: Submit new data to the in-memory store
* `GET /data`: Retrieve all data from the in-memory store
* `POST /reset`: Reset the in-memory data store

## End-to-End System Architecture Flow Diagram
```mermaid
graph LR
    User -->|Interacts with Weather app| WeatherApp
    WeatherApp -->|Sends RAM usage data| ReactFrontend
    ReactFrontend -->|Submits data to FastAPI| FastAPIBackend
    FastAPIBackend -->|Processes data| InMemoryDataStore
    InMemoryDataStore -->|Stores data| FastAPIBackend
    FastAPIBackend -->|Returns data to ReactFrontend| ReactFrontend
    ReactFrontend -->|Renders dashboard| User
    User -->|Interacts with dashboard| ReactFrontend
    ReactFrontend -->|Sends requests to FastAPI| FastAPIBackend
    FastAPIBackend -->|Processes requests| InMemoryDataStore
    InMemoryDataStore -->|Returns data to FastAPIBackend| FastAPIBackend
    FastAPIBackend -->|Returns data to ReactFrontend| ReactFrontend
```

## Running the Project
### Backend
1. Install required packages: `pip install -r requirements.txt`
2. Start the backend: `uvicorn backend.app:app --reload --port 8000`

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install required packages: `npm install`
3. Start the frontend: `npm run dev`

### CORS
CORS (Cross-Origin Resource Sharing) allows the React frontend to communicate with the FastAPI backend, even though they are running on different ports. This is enabled by default in the FastAPI backend.

## Step-by-Step Commands
1. Clone the repository: `git clone https://github.com/your-username/ram-weather-optimizer-portal.git`
2. Navigate to the project directory: `cd ram-weather-optimizer-portal`
3. Follow the backend and frontend setup instructions above

Note: Make sure to replace `your-username` with your actual GitHub username.
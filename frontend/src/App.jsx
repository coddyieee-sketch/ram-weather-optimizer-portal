import React, { useState, useEffect } from 'react';
import { FiSettings } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [ramUsage, setRamUsage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/weather-data')
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/ram-usage')
      .then(response => {
        setRamUsage(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>RAM Weather Optimizer Portal</h1>
        <button className="dark-mode-toggle" onClick={handleDarkModeToggle}>
          <FiSettings />
        </button>
      </header>
      <main className="main">
        <section className="weather-data">
          <h2>Weather Data</h2>
          <ul>
            {Object.keys(weatherData).map(key => (
              <li key={key}>
                <span>{key}</span>
                <span>{weatherData[key]}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="ram-usage">
          <h2>RAM Usage</h2>
          <p>{ramUsage}%</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${ramUsage}%` }} />
          </div>
        </section>
        <section className="system-logs">
          <h2>System Logs</h2>
          <ul>
            {Array(10).fill(0).map((_, index) => (
              <li key={index}>
                <span>Log {index + 1}</span>
                <span>System log message {index + 1}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
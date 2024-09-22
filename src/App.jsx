import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityWeather from './components/CityWeather';
import SearchInput from './components/SearchInput';
import TemperatureToggle from './components/TemperatureToggle';
import ForecastCard from './components/ForecastCard';
import './App.css'
const API_KEY = 'addYourKey'; 
const DEFAULT_CITY = 'Delhi';


function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(DEFAULT_CITY);
  const [unit, setUnit] = useState('metric'); 
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    const fetchForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
        );
        setForecastData(response.data.list.filter((item, index) => index % 8 === 0)); 
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };

    fetchWeather();
    fetchForecast();
  }, [city, unit]);

  const handleCityChange = (newCity) => setCity(newCity);
  const handleUnitChange = () => setUnit(unit === 'metric' ? 'imperial' : 'metric');

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <SearchInput onCityChange={handleCityChange} />
      <TemperatureToggle unit={unit} onToggle={handleUnitChange} />
      {weatherData && <CityWeather data={weatherData} />}
      <div className="forecast">
        {forecastData && forecastData.map((item, index) => (
          <ForecastCard key={index} forecast={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import './CityWeather.css';

// Mapping weather conditions to weather icons
const weatherIcons = {
  Clear: 'wi wi-day-sunny',
  Clouds: 'wi wi-cloudy',
  Rain: 'wi wi-rain',
  Snow: 'wi wi-snow',
  Thunderstorm: 'wi wi-thunderstorm',
  Drizzle: 'wi wi-sprinkle',
  Mist: 'wi wi-fog',
};

function CityWeather({ data }) {
  const { name, main, weather } = data;

  // Get the icon class for the current weather condition
  const iconClass = weatherIcons[weather[0].main] || 'wi wi-day-cloudy';

  return (
    <div className="city-weather">
      <h2>{name}</h2>
      <p>Temperature: {Math.round(main.temp)}°</p>
      <p>Condition: {weather[0].description}</p>
      <i className={`${iconClass} weather-icon`}></i> {/* Using icon from CDN */}
    </div>
  );
}

export default CityWeather;

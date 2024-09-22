import React from 'react';
import './ForecastCard.css';

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

function ForecastCard({ forecast }) {
  const date = new Date(forecast.dt * 1000);
  const day = date.toLocaleDateString('en-US', { weekday: 'long' });
  const { temp_min, temp_max } = forecast.main;

  // Get the icon class for the forecasted weather condition
  const iconClass = weatherIcons[forecast.weather[0].main] || 'wi wi-day-cloudy';

  return (
    <div className="forecast-card">
      <h4>{day}</h4>
      <p>High: {Math.round(temp_max)}°, Low: {Math.round(temp_min)}°</p>
      <i className={`${iconClass} forecast-icon`}></i> {/* Using icon from CDN */}
    </div>
  );
}

export default ForecastCard;

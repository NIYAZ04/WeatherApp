import React from 'react';
import './TemperatureToggle.css';
function TemperatureToggle({ unit, onToggle }) {
  return (
    <div >
      < button className='toggleButtonSpecial' onClick={onToggle}>
        {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
      </button>
    </div>
  );
}

export default TemperatureToggle;

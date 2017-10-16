import React from 'react';
import PropTypes from 'prop-types';

const WeatherInfo = ({data}) => {
  if(Object.keys(data).length === 0 && data.constructor === Object) {
    return(null);
  } else {
    return (    
      <div>
        <h3>Detailed weather for {data.name}</h3>
        <div>Temperature: {data.main.temp - 273.15}°C</div>
        <div>Min Temperature: {data.main.temp_min - 273.15} °C</div>
        <div>Max Temperature: {data.main.temp_max - 273.15} °C</div>
        <div>Pressure: {data.main.pressure} hpa</div>
        <div>Humidity: {data.main.humidity} %</div>
        <div>Wind: {data.wind.speed} m/s</div>
      </div>
    );
  }
};

WeatherInfo.propTypes = {
  data: PropTypes.object
};

export default WeatherInfo;

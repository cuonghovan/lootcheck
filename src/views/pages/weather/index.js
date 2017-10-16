import React from 'react';

import SearchBarContainer from './../../containers/search-bar';
import WeatherInfoContainer from './../../containers/weather-info';

const Weather = () => (
  <div className='weather'>
    <SearchBarContainer />
    <WeatherInfoContainer />
  </div>
);

export default Weather;

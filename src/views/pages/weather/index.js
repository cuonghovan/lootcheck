import React from 'react';

import SearchBarContainer from './../../containers/search-bar';
import WeatherInfoContainer from './../../containers/weather-info';

class Weather extends React.Component {
  render() {
    return (
      <div className='weather'>
        <SearchBarContainer />
        <WeatherInfoContainer />
      </div>
    );
  }
}

export default Weather;

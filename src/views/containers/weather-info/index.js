import React from 'react';
import { connect } from 'react-redux';

import {weatherSelectors} from './../../../core/weather'
import WeatherInfo from './../../components/weather-info';

class WeatherInfoContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WeatherInfo data={this.props.data} />
    );
  }
}

const mapStateToProps = state => ({
  data: weatherSelectors.getWeatherInfo(state)
});

export default connect(mapStateToProps, null)(WeatherInfoContainer);

import * as types from './types';

const clearWeatherInfo = () => ({
  type: types.CLEAR_WEATHER_INFO
});

const fetchWeatherInfo = location => ({
  type: types.FETCH_WEATHER_INFO,
  payload: {
    location
  }
});

const fetchWeatherInfoSuccess = weatherData => ({
  type: types.FETCH_WEATHER_INFO_SUCCESS,
  payload: {
    weatherData
  }
});

export const weatherActions = {
  clearWeatherInfo,
  fetchWeatherInfo,
  fetchWeatherInfoSuccess
};

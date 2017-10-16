import { toJS } from 'immutable';

export const getWeatherInfo = state => {
  return state.weatherInfo.toJS();
}

export const weatherSelectors = {
  getWeatherInfo
}

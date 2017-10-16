import { fromJS } from 'immutable';
import * as types from './types';

const initialWeatherInfo = fromJS({});

export const weatherReducer = (state = initialWeatherInfo, action) => {
  switch(action.type) {
    case types.CLEAR_WEATHER_INFO:
      return initialWeatherInfo;
    case types.FETCH_WEATHER_INFO_SUCCESS:
      return state.merge(action.payload.weatherData);
    default:
      return initialWeatherInfo;
  }
};

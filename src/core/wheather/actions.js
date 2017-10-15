import * as types from './types';

const clearWheatherInfo = () => ({
  type: types.CLEAR_WHEATHER_INFO
});

const fetchWheatherInfo = location => ({
  type: types.FETCH_WHEATHER_INFO,
  payload: {
    location
  }
});

const fetchWheatherInfoSuccess = wheatherData => ({
  type: types.FETCH_WHEATHER_INFO_SUCCESS,
  payload: {
    wheatherData
  }
});

export const wheatherActions = {
  clearWheatherInfo,
  fetchWheatherInfo,
  fetchWheatherInfoSuccess
};

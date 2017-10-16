import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as types from './types';
import * as services from './services';
import { weatherActions } from './actions';

export function* weatherSaga() {
  yield* takeLatest(types.FETCH_WEATHER_INFO, fetchWeatherInfo);
}

export function* fetchWeatherInfo({payload}) {
  let {location} = payload;
  yield put(weatherActions.clearWeatherInfo());

  let response = yield call(services.fetchWeatherInfo, location);
  if(response.status == 200) {
    yield put(weatherActions.fetchWeatherInfoSuccess(response.data));
  } else {
    console.log(response.message);
  }
}

export const weatherSagas = [
  fork(weatherSaga)
];

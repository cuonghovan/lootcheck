import { takeLatest } from 'redux-saga';
import { call, put, fork } from 'redux-saga/effects';
import * as types from './types';
import * as services from './services';
import { wheatherActions } from './actions';

export function* wheatherSaga() {
  yield* takeLatest(types.FETCH_WHEATHER_INFO, fetchWheatherInfo);
}

export function* fetchWheatherInfo({payload}) {
  let {location} = payload;
  yield put(wheatherActions.clearWheatherInfo());

  let response = yield call(services.fetchWheatherInfo, location);
  if(response.status == 200) {
    yield put(wheatherActions.fetchWheatherInfoSuccess(response.data));
  } else {
    console.log('error');
  }
}

export const wheatherSagas = [
  fork(wheatherSaga)
];

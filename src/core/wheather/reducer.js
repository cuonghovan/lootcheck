import { fromJS } from 'immutable';
import * as types from './types';

const initialWheatherInfo = fromJS({});

export const wheatherReducer = (state = initialWheatherInfo, action) => {
  switch(action.type) {
    case types.CLEAR_WHEATHER_INFO:
      return initialWheatherInfo;
    case types.FETCH_WHEATHER_INFO_SUCCESS:
      return state.merge(action.payload.wheatherData);
    default:
      return initialWheatherInfo;
  }
};

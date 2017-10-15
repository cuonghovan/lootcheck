import { toJS } from 'immutable';

export const getWheatherInfo = state => {
  return state.wheatherInfo.toJS();
}

export const wheatherSelectors = {
  getWheatherInfo
}

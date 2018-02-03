import { FETCH_BITCOIN } from '../actions/constants';

const bitcoinReducer = (initialState = {}, action) => {
  switch (action.type) {
    case FETCH_BITCOIN:
      return action.bitcoin;
    default:
      return initialState;
  }
}

export default bitcoinReducer;

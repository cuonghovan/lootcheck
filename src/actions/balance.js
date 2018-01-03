import * as constants from './constants';

export const setBalanceAction = balance => ({
  type: constants.SET_BALANCE,
  balance
});

import * as constants from './constants';

export const setBalanceAction = balance => ({
  type: constants.SET_BALANCE,
  balance
});

export const depositAction = deposit => ({
  type: constants.DEPOSIT,
  deposit
});

export const withdrawAction = withdraw => ({
  type: constants.WITHDRAW,
  withdraw
});

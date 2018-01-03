import * as balanceActions from './balance';
import * as constants from './constants';

it('creates an action to set balance', () => {
  const balance = 0;
  const balanceAction = { type: constants.SET_BALANCE, balance };
  
  expect(balanceActions.setBalanceAction(balance)).toEqual(balanceAction);
});

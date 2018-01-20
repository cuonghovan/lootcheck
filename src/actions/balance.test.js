import * as balanceActions from './balance';
import * as constants from './constants';

it('creates an action to set balance', () => {
  const balance = 0;
  const balanceAction = { type: constants.SET_BALANCE, balance };
  
  expect(balanceActions.setBalanceAction(balance)).toEqual(balanceAction);
});

it('creates an action to deposit', () => {
  const deposit = 10;

  expect(balanceActions.depositAction(deposit)).toEqual({type: constants.DEPOSIT, deposit});
});

it('creates an action to withdraw', () => {
  const withdraw = 10;

  expect(balanceActions.withdrawAction(withdraw)).toEqual({type: constants.WITHDRAW, withdraw});
});

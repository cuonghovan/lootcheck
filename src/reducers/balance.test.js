import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('Balance reducer', () => {
  describe('when initializing', () => {
    const balance = 10;
    
    it('should return right state', () => {
      expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance);
    });
    
    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it('deposit', () => {
    let initialState = 5;
    let deposit = 10;

    expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(15);
  });

  it('withdraw', () => {
    let initialState = 20;
    let withdraw = 10;

    expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdraw})).toEqual(10);
  });
});

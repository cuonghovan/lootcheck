import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const setBalanceFn = jest.fn();
  const depositBalanceFn = jest.fn();
  const withdrawBalanceFn = jest.fn();
  const props = {
    balance: 10,
    setBalanceAction: setBalanceFn,
    depositAction: depositBalanceFn,
    withdrawAction: withdrawBalanceFn  
  };
  const wallet = shallow(<Wallet {...props} />);

  it('renders correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('shows the balance', () => {
    expect(wallet.find('.balance').text()).toEqual('Balance: 10');
  });

  it('container an input', () => {
    expect(wallet.find('.balance-input').exists()).toBe(true);
  });

  describe('when user enters balance', () => {
    let balance = '10';

    beforeEach(() => {
      wallet.find('.balance-input').simulate('change', { target: { value: parseInt(balance, 10)}});
    })

    it('changes the balance in local state', () => {
      expect(wallet.state().balance).toEqual(10);
    });

    describe('and user wants to set balance', () => {
      beforeEach(() => {
        wallet.find('.set-btn').simulate('click');
      })
  
      it('calls `setBalance` once', () => {
        expect(setBalanceFn).toBeCalledWith(parseInt(balance, 10));
      })
    });

    describe('and user wants to deposit balance', () => {
      beforeEach(() => {
        wallet.find('.deposit-btn').simulate('click');
      })

      it('calls `depositAction` once', () => {
        expect(depositBalanceFn).toBeCalledWith(parseInt(balance, 10));
      })
    });

    describe('and user wants to withdraw balance', () => {
      beforeEach(() => {
        wallet.find('.withdraw-btn').simulate('click');
      })

      it('calls `withdrawAction` once', () => {
        expect(withdrawBalanceFn).toBeCalledWith(parseInt(balance, 10));
      });
    })
  });
}); 

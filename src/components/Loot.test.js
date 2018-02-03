import React from 'react';
import { Loot } from './Loot';
import { shallow, mount } from 'enzyme';

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn();
  let props = { balance: 10, bitcoin: {}, fetchBitcoin: mockFetchBitcoin};
  let loot = shallow(<Loot {...props} />);

  it('renders correctly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      loot = mount(<Loot {...props} />);
    });

    it('dispatch the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1,000'} } }, fetchBitcoin: mockFetchBitcoin };
      loot = shallow(<Loot {...props} />);
    });

    it('displays the correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    });
  });
});

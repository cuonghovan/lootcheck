import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);
  const id = 1; 

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  })
  
  it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({gifts: []});
    });

    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
    
    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });
  });

  describe('the user wants to remove gift', () => {
    beforeEach(() => {
      app.instance().removeGift(id);
    });

    it('removes gift from `state`', () => {
      expect(app.state().gifts).toEqual([]);
    });
  });
});

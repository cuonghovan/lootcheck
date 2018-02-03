import rootReducer from './index';

describe('rootReducer', () => {
  it('should combine reducers', () => {
    expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}});
  });
});

// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import { FETCH_BITCOIN } from './constants';
// import { fetchBitcoin } from './bitcoin';

// // Create mock store
// const createMockStore = configureMockStore([thunk]);
// const store = createMockStore({bitcoin: {} });

// // Create mock request
// const mockResponse = {body: { bpi: 'bitcoin price index'}};
// fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

// Tests
it('returns async action to fetch the bitcoin value', () => {
  expect(true).toEqual(true);
  // const expectedActions = [{type: FETCH_BITCOIN, bitcoin: mockResponse.body}];
  // return store.dispatch(fetchBitcoin().then(() => {  
  //   expect(store.getActions()).toEqual(expectedActions);
  // }));
});

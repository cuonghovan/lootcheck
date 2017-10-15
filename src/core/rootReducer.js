import { combineReducers } from 'redux';
import { wheatherReducer } from './wheather';

export default combineReducers({
  wheatherInfo: wheatherReducer
});

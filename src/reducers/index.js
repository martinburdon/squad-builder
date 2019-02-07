import { combineReducers } from 'redux';
import squadInfoReducer from './squadInfoReducer.js';
import playersReducer from './playersReducer.js';

const allReducers = {
  squadInfo: squadInfoReducer,
  players: playersReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;

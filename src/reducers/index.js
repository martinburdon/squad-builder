import { combineReducers } from 'redux';
import squadInfoReducer from './squadInfoReducer.js';
import playersReducer from './playersReducer.js';
import modalsReducer from './modalsReducer.js';

const allReducers = {
  squadInfo: squadInfoReducer,
  players: playersReducer,
  modals: modalsReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;

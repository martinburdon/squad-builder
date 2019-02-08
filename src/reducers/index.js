import { combineReducers } from 'redux';
import squadInfoReducer from './squadInfoReducer.js';
import playersReducer from './playersReducer.js';
import modalsReducer from './modalsReducer.js';
import squadStyleReducer from './squadStyleReducer.js';

const allReducers = {
  squadInfo: squadInfoReducer,
  players: playersReducer,
  modals: modalsReducer,
  squadStyles: squadStyleReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;

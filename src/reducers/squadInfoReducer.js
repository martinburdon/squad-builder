import {
  UPDATE_SQUAD_NAME,
  UPDATE_SQUAD_FORMATION
} from '../actions/actions.js';

const initialState = {
  formation: {
    display: '4-4-2',
    value: '442',
    positions: []
  },
  name: 'Sunderland',
  numberOfPlayers: 11
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SQUAD_NAME: {
      return {
        ...state,
        name: action.name
      }
    }

    case UPDATE_SQUAD_FORMATION: {
      return {
        ...state,
        formation: action.formation
      }
    }

    default:
      return state;
  }
}

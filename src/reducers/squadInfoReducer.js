import { formations } from '../formations.js';
import {
  UPDATE_SQUAD_NAME,
  UPDATE_SQUAD_FORMATION
} from '../actions/index.js';

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
      const formation = formations.find(item => item.value === action.formation);

      return {
        ...state,
        formation
      }
    }

    default:
      return state;
  }
}

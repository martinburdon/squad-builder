import { formations } from '../formations.js';
import {
  UPDATE_SQUAD_FORMATION,
  SET_EDITING_POSITION,
  UPDATE_PLAYER_NAME
} from '../actions/actions.js'

const initialState = {
  editingPositionId: false,
  players: [
    {
      arrow: false,
      captain: true,
      name: 'McGloughan',
      positionId: 1,
      shirtNumber: 1,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 2,
      shirtNumber: 2,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 3,
      shirtNumber: 3,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 4,
      shirtNumber: 4,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 5,
      shirtNumber: 5,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 6,
      shirtNumber: 6,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 7,
      shirtNumber: 7,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 8,
      shirtNumber: 8,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 9,
      shirtNumber: 9,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 10,
      shirtNumber: 10,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: '',
      positionId: 11,
      shirtNumber: 11,
      positions: { x: 0, y: 0 }
    }
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_SQUAD_FORMATION: {
      const formation = formations.find(item => item.value === action.formation);
      const positions = formation.positions;
      const newState = state.players.map((item, i) => {
        return {
          ...item,
          positions: positions[i]
        }
      })
      return {
        ...state,
        players: newState
      }
    }

    case SET_EDITING_POSITION: {
      return {
        ...state,
        editingPositionId: action.positionId
      }
    }

    case UPDATE_PLAYER_NAME: {
      const players = state.players.map(player => ({
        ...player,
        name: player.positionId === action.positionId ? action.name : player.name
      }));

      return {
        ...state,
        players
      }
    }

    default:
      return state;
  }
}

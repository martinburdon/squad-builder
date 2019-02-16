import { formations } from '../formations.js';
import {
  UPDATE_SQUAD_FORMATION,
  UPDATE_PLAYER_NAME,
  UPDATE_SHIRT_NUMBER
} from '../actions/index.js'

const initialState = {
  players: [
    {
      arrow: false,
      captain: true,
      name: 'Edit',
      positionId: 1,
      shirtNumber: 1,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 2,
      shirtNumber: 2,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 3,
      shirtNumber: 3,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 4,
      shirtNumber: 4,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 5,
      shirtNumber: 5,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 6,
      shirtNumber: 6,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 7,
      shirtNumber: 7,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 8,
      shirtNumber: 8,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 9,
      shirtNumber: 9,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
      positionId: 10,
      shirtNumber: 10,
      positions: { x: 0, y: 0 }
    },
    {
      arrow: false,
      captain: false,
      name: 'Edit',
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

    case UPDATE_SHIRT_NUMBER: {
      const players = state.players.map(player => ({
        ...player,
        shirtNumber: player.positionId === action.positionId ? action.shirtNumber : player.shirtNumber
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

import {
  UPDATE_PLAYER_POSITIONS
} from '../actions/actions.js'

const initialState = [
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
];

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_PLAYER_POSITIONS: {
      console.log(':: action ', action);
      const newState = state.map((item, i) => {
        return {
          ...item,
          positions: action.positions[i]
        }
      })
      return newState
    }

    default:
      return state;
  }
}

import {
  SET_SHIRT_STYLE,
  SET_SHIRT_PRIMARY_COLOUR,
  SET_SHIRT_SECONDARY_COLOUR,
  SET_SHIRT_TEXT_COLOUR,
  SET_PITCH_STYLE
} from '../actions/index.js';

const initialState = {
  shirtStyle: {
    style: 'fmclassic',
    colourPrimary: '#f00',
    colourSecondary: '#fff',
    colourText: '#000',
  },
  pitchStyle: 'stripes'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SHIRT_STYLE: {
      return {
        ...state,
        shirtStyle: {
          ...state.shirtStyle,
          style: action.style
        }
      }
    }

    case SET_SHIRT_PRIMARY_COLOUR: {
      return {
        ...state,
        shirtStyle: {
          ...state.shirtStyle,
          colourPrimary: action.colour
        }
      }
    }

    case SET_SHIRT_SECONDARY_COLOUR: {
      return {
        ...state,
        shirtStyle: {
          ...state.shirtStyle,
          colourSecondary: action.colour
        }
      }
    }

    case SET_SHIRT_TEXT_COLOUR: {
      return {
        ...state,
        shirtStyle: {
          ...state.shirtStyle,
          colourText: action.colour
        }
      }
    }

    case SET_PITCH_STYLE: {
      return {
        ...state,
        pitchStyle: action.style
      }
    }

    default:
      return state;
  }
};

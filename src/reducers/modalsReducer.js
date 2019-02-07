import {
  MODAL_SET_COMPONENT,
  MODAL_TOGGLE
} from '../actions/actions.js'

const initialState = {
  modalComponent: false,
  modalIsOpen: false
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case MODAL_SET_COMPONENT: {
      return {
        ...state,
        modalComponent: action.component,
        modalIsOpen: true
      }
    }

    case MODAL_TOGGLE: {
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen
      }
    }

    default:
      return state;
  }
}

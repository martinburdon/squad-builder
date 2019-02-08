import {
  MODAL_SET_COMPONENT,
  MODAL_TOGGLE
} from '../actions/index.js'

const initialState = {
  modalComponent: false,
  modalPayload: {},
  modalIsOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MODAL_SET_COMPONENT: {
      return {
        ...state,
        modalComponent: action.data.component,
        modalPayload: action.data.payload || {},
        modalIsOpen: true
      }
    }

    case MODAL_TOGGLE: {
      const modalIsOpen = !state.modalIsOpen;
      const updatedState = { modalIsOpen };

      if (!modalIsOpen) {
        updatedState.modalPayload = {};
        updatedState.modalComponent = false;
      }

      return {
        ...state,
        ...updatedState
      }
    }

    default:
      return state;
  }
}

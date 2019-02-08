/**
 *  Squad Info
 */

export const UPDATE_SQUAD_NAME = 'UPDATE_SQUAD_NAME';
export const UPDATE_SQUAD_FORMATION = 'UPDATE_SQUAD_FORMATION';

export function updateSquadName(name) {
  return {
    type: UPDATE_SQUAD_NAME,
    name
  }
}

export function updateSquadFormation(formation) {
  return {
    type: UPDATE_SQUAD_FORMATION,
    formation
  }
}

/**
 *  Modals
 */

export const MODAL_SET_COMPONENT = 'MODAL_SET_COMPONENT';
export const MODAL_TOGGLE = 'MODAL_TOGGLE';

export function setModalComponent(data) {
  return {
    type: MODAL_SET_COMPONENT,
    data
  }
}

export function toggleModal() {
  return {
    type: MODAL_TOGGLE
  }
}

/**
 *  Players
 */

export const UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME';

export function updatePlayerName(positionId, name) {
  return {
    type: UPDATE_PLAYER_NAME,
    positionId,
    name
  }
}

/**
 *  Squad Style
 */
export const SET_SHIRT_STYLE = 'SET_SHIRT_STYLE';
export const SET_SHIRT_PRIMARY_COLOUR = 'SET_SHIRT_PRIMARY_COLOUR';
export const SET_SHIRT_SECONDARY_COLOUR = 'SET_SHIRT_SECONDARY_COLOUR';
export const SET_SHIRT_TEXT_COLOUR = 'SET_SHIRT_TEXT_COLOUR';
export const SET_PITCH_STYLE = 'SET_PITCH_STYLE';

export function updateShirtStyle(style) {
  return {
    type: SET_SHIRT_STYLE,
    style
  }
}

export function updateShirtPrimaryColour(colour) {
  return {
    type: SET_SHIRT_PRIMARY_COLOUR,
    colour
  }
}

export function updateShirtSecondaryColour(colour) {
  return {
    type: SET_SHIRT_SECONDARY_COLOUR,
    colour
  }
}

export function updateShirtTextColour(colour) {
  return {
    type: SET_SHIRT_TEXT_COLOUR,
    colour
  }
}

export function updatePitchStyle(style) {
  return {
    type: SET_PITCH_STYLE,
    style
  }
}

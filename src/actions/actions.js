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

export function setModalComponent(component) {
  return {
    type: MODAL_SET_COMPONENT,
    component
  }
}

export function toggleModal(formation) {
  return {
    type: MODAL_TOGGLE,
    formation
  }
}

/**
 *  Players
 */

export const SET_EDITING_POSITION = 'SET_EDITING_POSITION';
export const UPDATE_PLAYER_NAME = 'UPDATE_PLAYER_NAME';

export function setEditingPosition(positionId) {
  return {
    type: SET_EDITING_POSITION,
    positionId
  }
}

export function updatePlayerName(positionId, name) {
  return {
    type: UPDATE_PLAYER_NAME,
    positionId,
    name
  }
}

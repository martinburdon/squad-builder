export const UPDATE_SQUAD_NAME = 'UPDATE_SQUAD_NAME';
export const UPDATE_SQUAD_FORMATION = 'UPDATE_SQUAD_FORMATION';

export const UPDATE_PLAYER_POSITIONS = 'UPDATE_PLAYER_POSITIONS';


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


export function updatePlayerPositions(positions) {
  return {
    type: UPDATE_PLAYER_POSITIONS,
    positions
  }
}

import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
  align-items: center;
  background: teal;
  display: flex;
  flex-direction: column;
  height: 5rem;
  position: absolute;
  transform: ${props => `translate(${props.x}rem, ${props.y}rem)`};
  width: 5rem;
`;

const onClick = ({
  dispatchSetModalComponent,
  playerNameOnChange,
  dispatchSetEditingPosition,
  dispatchToggleModal,
  positionId
}) => {
  dispatchSetModalComponent('playerOptions');
  dispatchSetEditingPosition(positionId);
};

export default ({
  player,
  dispatchSetModalComponent,
  playerNameOnChange,
  dispatchSetEditingPosition,
  dispatchToggleModal
}) => {
  const { x, y } = player.positions;
  // TODO: Set player.positionId on click
  return (
    <Player
      x={x}
      y={y}
      onClick={() => onClick({
        dispatchSetModalComponent,
        playerNameOnChange,
        dispatchSetEditingPosition,
        dispatchToggleModal,
        positionId: player.positionId
      })}
    >
      {player.captain ? <i>C</i> : null}
      <span>{player.shirtNumber}</span>
      <span>{player.name}</span>
    </Player>
  )
};

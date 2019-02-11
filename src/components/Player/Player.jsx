import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
  align-items: center;
  background: ${props => `${props.shirtStyle.colourPrimary}`};
  display: flex;
  flex-direction: column;
  height: 5rem;
  position: absolute;
  transform: ${props => `translate(${props.x}rem, ${props.y}rem)`};
  width: 5rem;
`;

export default ({ player, onClick, shirtStyle }) => {
  const { x, y } = player.positions;
  return (
    <Player x={x} y={y} onClick={onClick} shirtStyle={shirtStyle}>
      {player.captain ? <i>C</i> : null}
      <span>{player.shirtNumber}</span>
      <span>{player.name}</span>
    </Player>
  )
};

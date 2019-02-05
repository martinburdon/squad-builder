import React from 'react';
import Input from './Input.jsx';
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

export default ({
  arrow,
  captain,
  name,
  positionId,
  shirtNumber,
  positions,
  playerNameOnChange
}) => {
  const { x, y } = positions;
  return (
    <Player x={x} y={y}>
      {captain ? <i>C</i> : null}
      <span>{shirtNumber}</span>
      <span>{name}</span>
      <Input
        value={name}
        onChange={playerNameOnChange}
      />
    </Player>
  )
};

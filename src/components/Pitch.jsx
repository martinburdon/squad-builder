import React from 'react';
import PlayerContainer from './PlayerContainer.jsx';
import styled from 'styled-components';

const Pitch = styled.div`
  background: mediumseagreen;
  height: 50rem;
  position: relative;
  width: 40rem;
`;

export default ({ formation, players, playerNameOnChange }) => {
  const data = players.map((player, x) => <PlayerContainer {...player} key={x} playerNameOnChange={playerNameOnChange} />);
  return (
    <Pitch>
      {data}
    </Pitch>
  )
};

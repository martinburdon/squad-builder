import React from 'react';
import PlayerContainer from '../Player/PlayerContainer.jsx';
import styled from 'styled-components';

const Pitch = styled.div`
  background: mediumseagreen;
  height: 50rem;
  position: relative;
  width: 40rem;
`;

export default ({ players }) => {
  const data = players.map((player, x) => {
    return <PlayerContainer player={player} key={x} />;
  });

  return <Pitch>{data}</Pitch>;
};

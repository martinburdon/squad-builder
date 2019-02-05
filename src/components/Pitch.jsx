import React from 'react';
import Player from './Player.jsx';
import styled from 'styled-components';

const Pitch = styled.div`
  background: mediumseagreen;
  height: 50rem;
  position: relative;
  width: 40rem;
`;

export default ({ formation, players }) => {
  const data = players.map((player, x) => <Player {...player} key={x} />);
  return (
    <Pitch>
      {data}
    </Pitch>
  )
};

import React from 'react';
import Player from './Player.jsx';

export default ({ formation, players }) => {
  const data = players.map((player, x) => <Player {...player} key={x} />);
  return (
    <div className="pitch">
      {data}
    </div>
  )
};

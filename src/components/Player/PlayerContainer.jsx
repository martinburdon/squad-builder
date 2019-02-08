import React from 'react';
import Player from './Player.jsx';
import { connect } from 'react-redux';
import { setModalComponent } from '../../actions/index.js';

const PlayerContainer = ({ player, dispatch }) => {
  return (
    <Player
      player={player}
      onClick={() => dispatch(setModalComponent({
        component: 'playerOptions',
        payload: {
          positionId: player.positionId
        }
      }))}
    />
  );
};

export default connect()(PlayerContainer);

import React from 'react';
import Player from './Player.jsx';
import { connect } from 'react-redux';
import { setModalComponent } from '../../actions/index.js';

const PlayerContainer = ({ player, shirtStyle, dispatch }) => {
  return (
    <Player
      player={player}
      shirtStyle={shirtStyle}
      onClick={() => dispatch(setModalComponent({
        component: 'playerOptions',
        payload: {
          positionId: player.positionId
        }
      }))}
    />
  );
};

const mapStateToProps = state => ({
  shirtStyle: state.squadStyles.shirtStyle
});

export default connect(mapStateToProps)(PlayerContainer);

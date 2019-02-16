import React from 'react';
import Player from './Player.jsx';
import { connect } from 'react-redux';
import {
  setModalComponent,
  updatePositionCoords
} from '../../actions/index.js';

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
      onStop={(coords) => dispatch(updatePositionCoords(player.positionId,coords))}
    />
  );
};

const mapStateToProps = state => ({
  shirtStyle: state.squadStyles.shirtStyle
});

export default connect(mapStateToProps)(PlayerContainer);

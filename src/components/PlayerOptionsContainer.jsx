import React from 'react';
import { connect } from 'react-redux';

import {
  updatePlayerName
} from '../actions/actions.js';

const PlayerOptionsContainer = ({
  editingPositionId,
  players,
  dispatchUpdatePlayerName
}) => {
  const player = players.find(player => player.positionId === editingPositionId);

  return (
    <>
      <h2>Player Options</h2>
      <input
        type="text"
        value={player.name}
        onChange={(e) => dispatchUpdatePlayerName(editingPositionId, e.target.value)}
      />
    </>
  );
};

const mapStateToProps = state => ({
  players: state.players.players,
  editingPositionId: state.players.editingPositionId
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdatePlayerName: (playerId, name) => dispatch(updatePlayerName(playerId, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerOptionsContainer);

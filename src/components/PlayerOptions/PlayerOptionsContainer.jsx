import React from 'react';
import { connect } from 'react-redux';
import { updatePlayerName } from '../../actions/index.js';

const PlayerOptionsContainer = (props) => {
  const player = props.players.find(player => player.positionId === props.positionId);

  return (
    <>
      <h2>Player Options</h2>
      <input
        type="text"
        value={player.name}
        onChange={(e) => props.dispatchUpdatePlayerName(props.positionId, e.target.value)}
      />
    </>
  );
};

const mapStateToProps = state => ({
  players: state.players.players
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdatePlayerName: (playerId, name) => dispatch(updatePlayerName(playerId, name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerOptionsContainer);

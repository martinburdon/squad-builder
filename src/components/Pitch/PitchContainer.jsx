import React from 'react';
import { connect } from 'react-redux';
import Pitch from './Pitch.jsx';

const PitchContainer = ({
  formation,
  players
}) => {
  return (
    <Pitch
      formation={formation}
      players={players}
    />
  )
};

const mapStateToProps = state => ({
  formation: state.squadInfo.formation,
  players: state.players.players
});

export default connect(
  mapStateToProps
)(PitchContainer);

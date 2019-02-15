import React from 'react';
import { connect } from 'react-redux';
import Pitch from './Pitch.jsx';

const PitchContainer = ({ players, pitchStyle }) => {
  return <Pitch players={players} pitchStyle={pitchStyle} />;
};

const mapStateToProps = state => ({
  players: state.players.players,
  pitchStyle: state.squadStyles.pitchStyle
});

export default connect(
  mapStateToProps
)(PitchContainer);

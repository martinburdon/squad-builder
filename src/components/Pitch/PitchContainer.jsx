import React from 'react';
import { connect } from 'react-redux';
import Pitch from './Pitch.jsx';

const PitchContainer = ({ players }) => {
  return <Pitch players={players} />;
};

const mapStateToProps = state => ({
  players: state.players.players
});

export default connect(
  mapStateToProps
)(PitchContainer);

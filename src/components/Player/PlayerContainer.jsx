import React, { Component } from 'react';
import Player from './Player.jsx';
import { connect } from 'react-redux';
import {
  setEditingPosition,
  setModalComponent
} from '../../actions/actions.js';

class PlayerContainer extends Component {
  onPlayerClick = () => {
    this.props.dispatch(setModalComponent('playerOptions'));
    this.props.dispatch(setEditingPosition(this.props.player.positionId));
  }

  render() {
    return (
      <Player player={this.props.player} onClick={this.onPlayerClick} />
    );
  }
};

export default connect()(PlayerContainer);

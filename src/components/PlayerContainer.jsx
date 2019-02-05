import React, { Component } from 'react';
import Player from './Player.jsx';

export default class PlayerContainer extends Component {
  render() {
    console.log(':: ', this.props);
    return <Player {...this.props} />;
  }
};

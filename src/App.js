import React, { Component } from 'react';
import Pitch from './components/Pitch.jsx';
import ModalManager from './components/ModalManager.jsx';
import SquadSettingsContainer from './components/SquadSettings/SquadSettingsContainer.jsx';
import { connect } from 'react-redux';

import {
  updatePlayerPositions
} from './actions/actions.js'

// TODO: Pull from config or some external source
const availableFormations = [
  {
    display: '4-4-2',
    value: '442',
    positions: [
      { x: 17.5, y: 40 },
      { x: 3, y: 30 },
      { x: 13, y: 30 },
      { x: 22, y: 30 },
      { x: 32, y: 30 },
      { x: 3, y: 20 },
      { x: 13, y: 20 },
      { x: 22, y: 20 },
      { x: 32, y: 20 },
      { x: 13, y: 10 },
      { x: 22, y: 10 }
    ]
  },
  {
    display: '4-2-3-1',
    value: '4231',
    positions: [
      { x: 17.5, y: 40 },
      { x: 3, y: 30 },
      { x: 13, y: 30 },
      { x: 22, y: 30 },
      { x: 32, y: 30 },
      { x: 13, y: 20 },
      { x: 22, y: 20 },
      { x: 3, y: 12 },
      { x: 32, y: 12 },
      { x: 17.5, y: 13 },
      { x: 17.5, y: 6 }
    ]
  }
];

class App extends Component {
  state = {
    modalComponent: false,
    modalIsOpen: false,
    editingPositionId: false,
    shirtStyle: {
      style: 'fmclassic',
      colourPrimary: 'red',
      colourSecondary: 'white',
      colourText: 'black'
    },
    pitchStyle: ''
  };

  componentDidMount() {
    this.updatePlayerPositions();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({
      modalComponent: false,
      modalIsOpen: false
    });
  };

  updatePlayerPositions() {
    // Get the positions for the current formation
    let currentPositions = availableFormations.find(item => item.value === this.props.squadInfo.formation.value).positions;
    this.props.updatePlayerPositions(currentPositions);
  }

  openShirtOptions = () => {
    this.setState({ modalComponent: 'shirtOptions' }, () => {
      this.openModal();
    });
  };

  openPlayerOptions = (playerId) => {
    this.setState({
      modalComponent: 'playerOptions',
      editingPositionId: playerId
    }, () => {
      this.openModal();
    });
  };

  playerNameOnChange = ({ value, positionId }) => {
    const state = this.props.players;
    const newState = state.map(player => {
      let name = player.name;
      if (player.positionId === positionId) name = value;
      return {
        ...player,
        name
      }
    });
    this.setState({ players: newState });
  };

  render() {
    return (
      <div className="app">
        <SquadSettingsContainer
          availableFormations={availableFormations}
          shirtOptionsOnClick={this.openShirtOptions}
        />
        <Pitch
          formation={this.props.squadInfo.formation}
          onPlayerClick={this.openPlayerOptions}
          players={this.props.players}
          playerNameOnChange={this.playerNameOnChange}
        />
        <ModalManager
          modalComponent={this.state.modalComponent}
          players={this.props.players}
          editingPositionId={this.state.editingPositionId}
          playerNameOnChange={this.playerNameOnChange}
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

// TODO: Add state needed here (if any)
const mapStateToProps = state => ({
  squadInfo: state.squadInfo,
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  updatePlayerPositions: positions => dispatch(updatePlayerPositions(positions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

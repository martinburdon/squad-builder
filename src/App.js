import React, { Component } from 'react';
import Pitch from './components/Pitch.jsx';
import ModalManager from './components/ModalManager.jsx';
import SquadSettingsContainer from './components/SquadSettings/SquadSettingsContainer.jsx';
import { updateSquadFormation } from './actions/actions.js';
import { connect } from 'react-redux';

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
    this.props.dispatchUpdateSquadFormation(this.props.squadInfo.formation.value);
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

const mapStateToProps = state => ({
  squadInfo: state.squadInfo,
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSquadFormation: formation => dispatch(updateSquadFormation(formation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

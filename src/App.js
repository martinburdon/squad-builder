import React, { Component } from 'react';
import PitchContainer from './components/Pitch/PitchContainer.jsx';
import ModalManager from './components/ModalManager.jsx';
import SquadSettingsContainer from './components/SquadSettings/SquadSettingsContainer.jsx';
import { updateSquadFormation } from './actions/actions.js';
import { connect } from 'react-redux';

class App extends Component {
  state = {
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

  openShirtOptions = () => {
    this.setState({ modalComponent: 'shirtOptions' }, () => {
      this.openModal();
    });
  };

  render() {
    return (
      <div className="app">
        <SquadSettingsContainer shirtOptionsOnClick={this.openShirtOptions} />
        <PitchContainer />
        <ModalManager />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squadInfo: state.squadInfo,
  players: state.players.players
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSquadFormation: formation => dispatch(updateSquadFormation(formation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

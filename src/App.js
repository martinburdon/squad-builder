import React, { Component } from 'react';
import PitchContainer from './components/Pitch/PitchContainer.jsx';
import ModalManager from './components/ModalManager/ModalManager.jsx';
import SquadSettingsContainer from './components/SquadSettings/SquadSettingsContainer.jsx';
import { updateSquadFormation } from './actions/index.js';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(updateSquadFormation(this.props.squadInfo.formation.value));
  }

  render() {
    return (
      <div className="app">
        <SquadSettingsContainer />
        <PitchContainer />
        <ModalManager />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squadInfo: state.squadInfo
});

export default connect(mapStateToProps)(App);

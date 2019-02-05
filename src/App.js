import React, { Component } from 'react';
import Select from './components/Select.jsx';
import Input from './components/Input.jsx';
import Button from './components/Button.jsx';
import Pitch from './components/Pitch.jsx';

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
    squadInfo: {
      formation: {
        display: '4-4-2',
        value: '442'
      },
      name: 'Sunderland',
      numberOfPlayers: 11
    },
    shirtStyle: {
      style: 'fmclassic',
      colourPrimary: 'red',
      colourSecondary: 'white',
      colourText: 'black'
    },
    pitchStyle: '',
    players: [
      {
        arrow: false,
        captain: true,
        name: 'McGloughan',
        positionId: 1,
        shirtNumber: 1,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 2,
        shirtNumber: 2,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 3,
        shirtNumber: 3,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 4,
        shirtNumber: 4,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 5,
        shirtNumber: 5,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 6,
        shirtNumber: 6,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 7,
        shirtNumber: 7,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 8,
        shirtNumber: 8,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 9,
        shirtNumber: 9,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 10,
        shirtNumber: 10,
        positions: { x: 0, y: 0 }
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 11,
        shirtNumber: 11,
        positions: { x: 0, y: 0 }
      }
    ]
  };

  componentDidMount() {
    this.updatePlayerPositions();
  }

  updatePlayerPositions() {
    // Get the positions for the current formation
    let currentPositions = availableFormations.find(item => item.value === this.state.squadInfo.formation.value).positions;

    // Set each players position based on the current formation
    const newPlayersState = this.state.players.map((player, i) => ({
      ...player,
      positions: currentPositions[i]
    }));

    this.setState({ players: newPlayersState });
  }

  formationOnChange = formation => {
    const squadInfo = { ...this.state.squadInfo };
    squadInfo.formation = formation;
    this.setState({ squadInfo }, () => {
      this.updatePlayerPositions();
    });
  };

  nameOnChange = name => {
    const squadInfo = { ...this.state.squadInfo };
    squadInfo.name = name;
    this.setState({ squadInfo });
  };

  customiseOnClick = () => {
    // TODO: Open modal with customise options
    console.log('Customise clicked');
  };

  render() {
    return (
      <div className="app">
        <Select
          data={availableFormations}
          selected={this.state.squadInfo.formation}
          onChange={this.formationOnChange}
        />
        <Input
          value={this.state.squadInfo.name}
          onChange={this.nameOnChange}
        />
        <Button
          value="Customise"
          onClick={this.customiseOnClick}
        />
        <Pitch
          formation={this.state.squadInfo.formation}
          players={this.state.players}
        />
      </div>
    );
  }
}

export default App;

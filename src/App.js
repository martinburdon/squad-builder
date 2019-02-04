import React, { Component } from 'react';
import Select from './components/Select.jsx';
import Input from './components/Input.jsx';
import Button from './components/Button.jsx';
import Pitch from './components/Pitch.jsx';

// TODO: Pull from config or some external source
const availableFormations = [
  {
    display: '4-4-2',
    value: '442'
  },
  {
    display: '4-2-3-1',
    value: '4231'
  }
];

class App extends Component {
  state = {
    squadInfo: {
      formation: {
        display: '4-2-3-1',
        value: '4231'
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
        shirtNumber: 1
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 2,
        shirtNumber: 2
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 3,
        shirtNumber: 3
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 4,
        shirtNumber: 4
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 5,
        shirtNumber: 5
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 6,
        shirtNumber: 6
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 7,
        shirtNumber: 7
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 8,
        shirtNumber: 8
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 9,
        shirtNumber: 9
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 10,
        shirtNumber: 10
      },
      {
        arrow: false,
        captain: false,
        name: '',
        positionId: 11,
        shirtNumber: 11
      }
    ]
  };

  formationOnChange = formation => {
    const squadInfo = { ...this.state.squadInfo };
    squadInfo.formation = formation;
    this.setState({ squadInfo });
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

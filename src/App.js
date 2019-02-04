import React, { Component } from 'react';

class App extends Component {
  state = {
    squadInfo: {
      formation: '4231',
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
    positions: [
      {
        positionId: 1,
        name: '',
        shirtNumber: 1,
        arrow: false,
        captain: false
      },
      {
        positionId: 2,
        name: '',
        shirtNumber: 2,
        arrow: false,
        captain: false
      },
      {
        positionId: 3,
        name: '',
        shirtNumber: 3,
        arrow: false,
        captain: false
      },
      {
        positionId: 4,
        name: '',
        shirtNumber: 4,
        arrow: false,
        captain: false
      },
      {
        positionId: 5,
        name: '',
        shirtNumber: 5,
        arrow: false,
        captain: false
      },
      {
        positionId: 6,
        name: '',
        shirtNumber: 6,
        arrow: false,
        captain: false
      },
      {
        positionId: 7,
        name: '',
        shirtNumber: 7,
        arrow: false,
        captain: false
      },
      {
        positionId: 8,
        name: '',
        shirtNumber: 8,
        arrow: false,
        captain: false
      },
      {
        positionId: 9,
        name: '',
        shirtNumber: 9,
        arrow: false,
        captain: false
      },
      {
        positionId: 10,
        name: '',
        shirtNumber: 10,
        arrow: false,
        captain: false
      },
      {
        positionId: 11,
        name: '',
        shirtNumber: 11,
        arrow: false,
        captain: false
      }
    ]
  };

  render() {
    return (
      <div className="app"></div>
    );
  }
}

export default App;

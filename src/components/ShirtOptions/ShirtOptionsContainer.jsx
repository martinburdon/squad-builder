import React from 'react';
import { connect } from 'react-redux';
import ColourPicker from './ColourPicker.jsx';
import Player from '../Player/Player.jsx';
import {
  updateShirtStyle,
  updateShirtPrimaryColour,
  updateShirtSecondaryColour,
  updateShirtTextColour,
  updatePitchStyle
} from '../../actions/index.js';

const ShirtOptionsContainer = ({
  dispatch,
  squadStyles,
  shirtStyle
}) => {
  const player = {
    name: 'Grigg',
    shirtNumber: '9',
    positions: {
      x: 0,
      y: 0
    }
  };
  return (
    <>
      <h2>Shirt Options</h2>

      <Player
        player={player}
        onClick={null}
        shirtStyle={shirtStyle}
      />

      <select
        value={shirtStyle.style}
        onChange={(e) => dispatch(updateShirtStyle(e.target.value))}
      >
        <option value="fmclassic">FM Classic</option>
        <option value="shirt">Shirt</option>
      </select>

      <ColourPicker
        colour={shirtStyle.colourPrimary}
        onChange={(colour) => dispatch(updateShirtPrimaryColour(colour))}
      />

      <ColourPicker
        colour={shirtStyle.colourSecondary}
        onChange={(colour) => dispatch(updateShirtSecondaryColour(colour))}
      />

      <ColourPicker
        colour={shirtStyle.colourText}
        onChange={(colour) => dispatch(updateShirtTextColour(colour))}
      />

      <select
        value={squadStyles.pitchStyle}
        onChange={(e) => dispatch(updatePitchStyle(e.target.value))}
      >
        <option value="stripes">Stripes</option>
        <option value="squares">Squares</option>
      </select>
    </>
  );
};

const mapStateToProps = state => ({
  squadStyles: state.squadStyles,
  shirtStyle: state.squadStyles.shirtStyle
});

export default connect(mapStateToProps)(ShirtOptionsContainer);

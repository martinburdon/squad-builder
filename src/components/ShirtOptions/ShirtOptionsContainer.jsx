import React from 'react';
import { connect } from 'react-redux';
import ColourPicker from './ColourPicker.jsx';
import {
  updateShirtStyle,
  updateShirtPrimaryColour,
  updateShirtSecondaryColour,
  updateShirtTextColour,
  updatePitchStyle
} from '../../actions/index.js';

const ShirtOptionsContainer = ({
  dispatch,
  squadStyles
}) => {
  return (
    <>
      <h2>Shirt Options</h2>

      <select
        value={squadStyles.shirtStyle.style}
        onChange={(e) => dispatch(updateShirtStyle(e.target.value))}
      >
        <option value="fmclassic">FM Classic</option>
        <option value="shirt">Shirt</option>
      </select>

      <ColourPicker
        colour={squadStyles.shirtStyle.colourPrimary}
        onChange={(colour) => dispatch(updateShirtPrimaryColour(colour))}
      />

      <ColourPicker
        colour={squadStyles.shirtStyle.colourSecondary}
        onChange={(colour) => dispatch(updateShirtSecondaryColour(colour))}
      />

      <ColourPicker
        colour={squadStyles.shirtStyle.colourText}
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
  squadStyles: state.squadStyles
});

export default connect(mapStateToProps)(ShirtOptionsContainer);

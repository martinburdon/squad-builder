import React from 'react';
import { connect } from 'react-redux';
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

      <input
        type="text"
        value={squadStyles.shirtStyle.colourPrimary}
        onChange={(e) => dispatch(updateShirtPrimaryColour(e.target.value))}
      />

      <input
        type="text"
        value={squadStyles.shirtStyle.colourSecondary}
        onChange={(e) => dispatch(updateShirtSecondaryColour(e.target.value))}
      />

      <input
        type="text"
        value={squadStyles.shirtStyle.colourText}
        onChange={(e) => dispatch(updateShirtTextColour(e.target.value))}
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

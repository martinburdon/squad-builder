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
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const PlayerContainer = styled.div`
  display: inline-block;
  padding: 2rem;

  div {
    position: relative;
  }
`;

const ColourPickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 10rem;
`;

const PitchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

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

      <Wrapper>
        <ColourPickerContainer>
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
        </ColourPickerContainer>

        <PitchContainer>
          <select
            value={shirtStyle.style}
            onChange={(e) => dispatch(updateShirtStyle(e.target.value))}
          >
            <option value="fmclassic">FM Classic</option>
            <option value="shirt">Shirt</option>
          </select>

          <PlayerContainer>
            <Player
              player={player}
              onClick={null}
              shirtStyle={shirtStyle}
            />
          </PlayerContainer>

          <select
            value={squadStyles.pitchStyle}
            onChange={(e) => dispatch(updatePitchStyle(e.target.value))}
          >
            <option value="stripes">Stripes</option>
            <option value="squares">Squares</option>
          </select>
        </PitchContainer>
      </Wrapper>
    </>
  );
};

const mapStateToProps = state => ({
  squadStyles: state.squadStyles,
  shirtStyle: state.squadStyles.shirtStyle
});

export default connect(mapStateToProps)(ShirtOptionsContainer);

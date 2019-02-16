import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const BasePlayer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;

  .shirt {
    align-items: center;
    color: ${props => `${props.shirtStyle.colourText}`};
    cursor: grab;
    display: flex;
    justify-content: center;
    text-shadow: 0 0 0.2rem #000;
  }

  .name {
    color: white;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 0.3rem;
    text-shadow: 0 0 0.2rem #000;
  }
`;

const Default = styled(BasePlayer)`
  background: ${props => `${props.shirtStyle.colourPrimary}`};
  height: 5rem;
  width: 5rem;
`;

const FMClassic = styled(BasePlayer)`
  height: 6rem;
  width: 6rem;

  .shirt {
    background: ${props => `${props.shirtStyle.colourPrimary}`};
    border-color: ${props => `${props.shirtStyle.colourSecondary}`};
    border-width: 0.3rem;
    border-style: solid;
    border-radius: 10rem;
    font-size: 1.3rem;
    font-weight: bold;
    height: 3rem;
    width: 3rem;
  }
`;

export default ({ player, onClick, onStop, shirtStyle }) => {
  const shirtStyles = {
    fmclassic: FMClassic
  };

  const ShirtComponent = shirtStyles[shirtStyle.style] || Default;
  const { x, y } = player.positions;

  return (
    <Draggable
      bounds="parent"
      handle=".shirt"
      position={{x, y}}
      onStop={(e, data) => onStop(data)}
    >
      <ShirtComponent shirtStyle={shirtStyle}>
        <div className="shirt">
          {/*{player.captain ? <i>C</i> : null}*/}
          <span>{player.shirtNumber}</span>
        </div>
        <span className="name" onClick={onClick}>{player.name}</span>
      </ShirtComponent>
    </Draggable>
  )
};

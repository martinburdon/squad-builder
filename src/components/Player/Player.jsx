import React from 'react';
import styled from 'styled-components';

const BasePlayer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  transform: ${props => `translate(${props.x}rem, ${props.y}rem)`};
  z-index: 2;

  .shirt {
    align-items: center;
    color: ${props => `${props.shirtStyle.colourText}`};
    display: flex;
    justify-content: center;
    text-shadow: 0 0 0.2rem #000;
  }

  .name {
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
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

export default ({ player, onClick, shirtStyle }) => {
  const shirtStyles = {
    fmclassic: FMClassic
  };

  const ShirtComponent = shirtStyles[shirtStyle.style] || Default;
  const { x, y } = player.positions;
  return (
    <ShirtComponent x={x} y={y} onClick={onClick} shirtStyle={shirtStyle}>
      <div className="shirt">
        {/*{player.captain ? <i>C</i> : null}*/}
        <span>{player.shirtNumber}</span>
      </div>
      <span className="name">{player.name}</span>
    </ShirtComponent>
  )
};

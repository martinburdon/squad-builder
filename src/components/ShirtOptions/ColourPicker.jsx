import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
import styled from 'styled-components';

const ColourPickerContainer = styled.div`
  position: relative;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  text-align: center;
`;

const Button = styled.button`
  background: ${props => `${props.colour}`};
  border: none;
  border-radius: 5rem;
  height: 3rem;
  width: 3rem;
`;

// screen reader only styles
const ButtonText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
`;

const ButtonLabel = styled.span`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

const PickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  top: 5rem;
  left: 3rem;
`;

const Cover = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default class ColourPicker extends Component {
  state = {
    isOpen: false
  };

  handleChangeComplete = (color) => {
    this.props.onChange(color.hex);
  };

  togglePicker = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <ColourPickerContainer>
        <ButtonContainer>
          <Button onClick={this.togglePicker} colour={this.props.colour}>
            <ButtonText>Pick colour</ButtonText>
          </Button>
          <ButtonLabel>Pick colour</ButtonLabel>
        </ButtonContainer>
          {this.state.isOpen &&
            <PickerContainer>
              <Cover onClick={this.togglePicker} />
              <TwitterPicker
                color={this.props.colour}
                onChange={this.handleChangeComplete}
              />
            </PickerContainer>
          }
      </ColourPickerContainer>
    );
  }
};

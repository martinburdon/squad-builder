import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => `${props.colour}`};
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
      <>
        <Button
          onClick={this.togglePicker}
          colour={this.props.colour}
        >
          Pick colour
        </Button>
        {this.state.isOpen &&
          <CirclePicker
            color={ this.props.colour }
            onChangeComplete={ this.handleChangeComplete }
          />
        }
      </>
    );
  }
};

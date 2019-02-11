import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

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
        <button onClick={this.togglePicker}>Pick colour</button>
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

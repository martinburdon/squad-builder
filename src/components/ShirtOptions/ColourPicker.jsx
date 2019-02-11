import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

export default class ColourPicker extends Component {
  handleChangeComplete = (color) => {
    this.props.onChange(color.hex);
  };

  render() {
    return (
      <CirclePicker
        color={ this.props.colour }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
};

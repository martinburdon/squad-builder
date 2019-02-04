import React, { Component } from 'react';

class PlayerDropdown extends Component {
  state = {
    selectedPlayer: ''
  };

  onChange = e => {
    const { addToPitch, positionId } = this.props;
    const playerId = e.target.value;
    this.setState({ selectedPlayer: playerId });
    addToPitch({ playerId, positionId });
  };

  render() {
    // this.props.positionList
    const playerDropdowns = this.props.squadList.map(({ firstName, lastName, playerId }) => <option value={playerId} key={playerId}>{firstName} {lastName}</option>);

    return (
      <select value={this.state.selectedPlayer} onChange={this.onChange}>
        <option>- - - - - -</option>
        {playerDropdowns}
      </select>
    )
  }
}

export default PlayerDropdown;

import React from 'react';
import PlayerDropdown from './PlayerDropdown.jsx';

export default ({ addToPitch, positionList, squadList }) => {
  console.log(':: squadList ', squadList);

  const startingEleven = [...Array(11)].map((n, x) => <PlayerDropdown squadList={squadList} addToPitch={addToPitch} positionList={positionList} positionId={x+1} key={x} />);

  return (
    <div className="squad-selection">
      {startingEleven}
    </div>
  );
};

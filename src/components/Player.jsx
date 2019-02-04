import React from 'react';

export default ({
  arrow,
  captain,
  name,
  positionId,
  shirtNumber
}) => {
  return (
    <div className="player">
      {captain ? <i>C</i> : null}
      <span>{shirtNumber}</span>
      <span>{name}</span>
    </div>
  )
};

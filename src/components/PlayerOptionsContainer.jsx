import React from 'react';

export default ({
  editingPositionId,
  players,
  playerNameOnChange
}) => {
  const player = players.find(player => player.positionId === editingPositionId);

  return (
    <>
      <h2>Player Options</h2>
      <input
        type="text"
        value={player.name}
        onChange={(e) => playerNameOnChange({
          value: e.target.value,
          positionId: editingPositionId
        })}
      />
    </>
  );
};

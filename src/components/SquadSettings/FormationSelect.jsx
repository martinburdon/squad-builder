import React from 'react';

const handleChange = (e, data, onChange, updatePlayerPositions) => {
  const selectedValue = e.target.value;
  const selectedFormation = data.find(item => item.value === selectedValue);
  const positions = selectedFormation.positions;
  // delete selectedFormation.positions;
  onChange(selectedFormation);
  updatePlayerPositions(positions);
};

export default ({ data, onChange, selected, updatePlayerPositions }) => {
  const options = data.map((item, x) => <option value={item.value} key={x}>{item.display}</option>);
  return (
    <select value={selected.value} onChange={(e) => handleChange(e, data, onChange, updatePlayerPositions)}>
      {options}
    </select>
  );
};

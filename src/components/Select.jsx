import React from 'react';

const handleChange = (e, data, onChange) => {
  const selectedValue = e.target.value;
  const selectedFormation = data.find(item => item.value === selectedValue);
  onChange(selectedFormation);
};

export default ({ data, onChange, selected }) => {
  const options = data.map((item, x) => <option value={item.value} key={x}>{item.display}</option>);
  return (
    <select value={selected.value} onChange={(e) => handleChange(e, data, onChange)}>
      {options}
    </select>
  );
};

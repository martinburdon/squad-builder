import React from 'react';
import { formations } from '../../formations.js';

export default ({ onChange, selected }) => {
  const options = formations.map((item, x) => <option value={item.value} key={x}>{item.display}</option>);

  return (
    <select value={selected.value} onChange={(e) => onChange(e.target.value)}>
      {options}
    </select>
  );
};

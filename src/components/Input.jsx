import React from 'react';

export default ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  );
};

import React from 'react';

export default ({ onClick, value }) => {
  return (
    <button onClick={onClick}>{value}</button>
  );
};

import React from 'react';

export default ({ onChange, value }) => {
  return (
    <input onChange={onChange}>{value}</input>
  );
};

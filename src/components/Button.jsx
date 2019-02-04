import React from 'react';

export default ({ className, onSubmit, display }) => {
  return (
    <button className={className} onSubmit={onSubmit}>{display}</button>
  );
};

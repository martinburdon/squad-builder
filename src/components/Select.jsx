import React from 'react';

// Example data
// const data = [
//   {
//     display: '4-4-2',
//     value: '442'
//   },
//   {
//     display: '4-2-3-1',
//     value: '4231'
//   }
// ];

export default ({ data, onChange, value }) => {
  const options = data.map((item, x) => <option value={item.value} key={x}>{item.display}</option>);
  return (
    <select value={value} onChange={onChange}>
      {options}
    </select>
  );
};

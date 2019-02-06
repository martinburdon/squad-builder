import React from 'react';
import Select from './Select.jsx';
import Input from './Input.jsx';
import Button from './Button.jsx';

export default ({
  availableFormations,
  selectedFormation,
  formationOnChange,
  squadName,
  squadNameOnChange,
  shirtOptionsOnClick
}) => {
  return (
    <section>
      <Select
        data={availableFormations}
        selected={selectedFormation}
        onChange={formationOnChange}
      />
      <Input
        value={squadName}
        onChange={squadNameOnChange}
      />
      <Button
        value="Shirt Options"
        onClick={shirtOptionsOnClick}
      />
    </section>
  )
};

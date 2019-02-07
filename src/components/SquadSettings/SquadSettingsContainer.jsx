import React from 'react';
import FormationSelect from './FormationSelect.jsx';
import Input from '../Input.jsx';
import Button from '../Button.jsx';
import { connect } from 'react-redux';

import {
  updateSquadName,
  updateSquadFormation
} from '../../actions/actions.js';

const SquadSettingsContainer = ({
  shirtOptionsOnClick,
  squadInfo,
  dispatchUpdateSquadName,
  dispatchUpdateSquadFormation
}) => {
  return (
    <section>
      <FormationSelect
        selected={squadInfo.formation}
        onChange={dispatchUpdateSquadFormation}
      />
      <Input
        value={squadInfo.name}
        onChange={dispatchUpdateSquadName}
      />
      <Button
        value="Shirt Options"
        onClick={shirtOptionsOnClick}
      />
    </section>
  )
};

const mapStateToProps = state => ({
  squadInfo: state.squadInfo
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSquadName: name => dispatch(updateSquadName(name)),
  dispatchUpdateSquadFormation: formation => dispatch(updateSquadFormation(formation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadSettingsContainer);

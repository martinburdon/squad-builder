import React from 'react';
import FormationSelect from './FormationSelect.jsx';
import Input from '../Input.jsx';
import Button from '../Button.jsx';
import { connect } from 'react-redux';
import {
  updateSquadName,
  updateSquadFormation,
  updatePlayerPositions
} from '../../actions/actions.js'

const SquadSettingsContainer = ({
  availableFormations,
  shirtOptionsOnClick,
  squadInfo,
  updateSquadName,
  updateSquadFormation,
  updatePlayerPositions
}) => {
  return (
    <section>
      <FormationSelect
        data={availableFormations}
        selected={squadInfo.formation}
        onChange={updateSquadFormation}
        updatePlayerPositions={updatePlayerPositions}
      />
      <Input
        value={squadInfo.name}
        onChange={updateSquadName}
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
  updateSquadName: name => dispatch(updateSquadName(name)),
  updateSquadFormation: formation => dispatch(updateSquadFormation(formation)),
  updatePlayerPositions: positions => dispatch(updatePlayerPositions(positions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadSettingsContainer);

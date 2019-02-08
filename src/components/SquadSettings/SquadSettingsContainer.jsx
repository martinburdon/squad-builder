import React from 'react';
import FormationSelect from './FormationSelect.jsx';
import { connect } from 'react-redux';

import {
  updateSquadName,
  updateSquadFormation,
  setModalComponent
} from '../../actions/actions.js';

const SquadSettingsContainer = ({
  dispatchSetModalComponent,
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
      <input
        type="text"
        value={squadInfo.name}
        onChange={(e) => dispatchUpdateSquadName(e.target.value)}
      />
      <button
        onClick={() => dispatchSetModalComponent('shirtOptions')}>
        Shirt Options
      </button>
    </section>
  )
};

const mapStateToProps = state => ({
  squadInfo: state.squadInfo
});

const mapDispatchToProps = dispatch => ({
  dispatchUpdateSquadName: name => dispatch(updateSquadName(name)),
  dispatchUpdateSquadFormation: formation => dispatch(updateSquadFormation(formation)),
  dispatchSetModalComponent: component => dispatch(setModalComponent(component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadSettingsContainer);

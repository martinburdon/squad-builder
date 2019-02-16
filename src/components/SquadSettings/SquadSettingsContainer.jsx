import React from 'react';
import { connect } from 'react-redux';
import { formations } from '../../formations.js';
import {
  updateSquadName,
  updateSquadFormation,
  setModalComponent
} from '../../actions/index.js';

const SquadSettingsContainer = ({
  squadInfo,
  dispatch
}) => {
  return (
    <section>
      <select
        value={squadInfo.formation.value}
        onChange={(e) => dispatch(updateSquadFormation(e.target.value))}
      >
        {formations.map((item, x) => <option value={item.value} key={x}>{item.display}</option>)}
      </select>
      <input
        type="text"
        value={squadInfo.name}
        onChange={(e) => dispatch(updateSquadName(e.target.value))}
      />
      <button
        onClick={() => dispatch(setModalComponent({
          component: 'shirtOptions'
        }))}>
        Shirt Options
      </button>
    </section>
  )
};

const mapStateToProps = state => ({
  squadInfo: state.squadInfo
});

export default connect(mapStateToProps)(SquadSettingsContainer);

import React from 'react';
import Player from './Player.jsx';
import { connect } from 'react-redux';

import {
  setEditingPosition,
  setModalComponent,
  toggleModal
} from '../../actions/actions.js';

const PlayerContainer = ({
  dispatchSetEditingPosition,
  dispatchSetModalComponent,
  dispatchToggleModal,
  player
}) => {
  return (
    <Player
      dispatchSetEditingPosition={dispatchSetEditingPosition}
      dispatchSetModalComponent={dispatchSetModalComponent}
      dispatchToggleModal={dispatchToggleModal}
      player={player}
    />
  );
};

const mapStateToProps = state => ({
  squadInfo: state.squadInfo
});

const mapDispatchToProps = dispatch => ({
  dispatchSetEditingPosition: name => dispatch(setEditingPosition(name)),
  dispatchSetModalComponent: component => dispatch(setModalComponent(component)),
  dispatchToggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerContainer);

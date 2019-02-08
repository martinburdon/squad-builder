import React from 'react';
import Modal from 'react-modal';
import ShirtOptionsContainer from '../ShirtOptions/ShirtOptionsContainer.jsx';
import PlayerOptionsContainer from '../PlayerOptions/PlayerOptionsContainer.jsx';
import { connect } from 'react-redux';
import {
  setModalComponent,
  toggleModal
} from '../../actions/actions.js';

Modal.setAppElement('#root');

const ModalManager = ({
  modalComponent,
  modalIsOpen,
  dispatchSetModalComponent,
  dispatchToggleModal
}) => {
  let childComponent = false;
  if (modalComponent === 'shirtOptions') childComponent = <ShirtOptionsContainer />;
  if (modalComponent === 'playerOptions') childComponent = <PlayerOptionsContainer />;

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={dispatchToggleModal}>
      <button onClick={dispatchToggleModal}>Close</button>
      {childComponent}
    </Modal>
  );
};

const mapStateToProps = state => ({
  modalComponent: state.modals.modalComponent,
  modalIsOpen: state.modals.modalIsOpen
});

const mapDispatchToProps = dispatch => ({
  dispatchSetModalComponent: component => dispatch(setModalComponent(component)),
  dispatchToggleModal: () => dispatch(toggleModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalManager);

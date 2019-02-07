import React from 'react';
import Modal from 'react-modal';
import ShirtOptionsContainer from './ShirtOptionsContainer.jsx';
import PlayerOptionsContainer from './PlayerOptionsContainer.jsx';
import Button from './Button.jsx';
import { connect } from 'react-redux';
import {
  setModalComponent,
  toggleModal
} from '../actions/actions.js';

Modal.setAppElement('#root');

const ModalManager = ({
  modalComponent,
  modalIsOpen,
  dispatchSetModalComponent,
  dispatchToggleModal
}) => {
  let childComponent = false;
  if (modalComponent === 'shirtOptions') {
    childComponent = <ShirtOptionsContainer />;
  }

  if (modalComponent === 'playerOptions') {
    childComponent = <PlayerOptionsContainer />;
  }

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={dispatchToggleModal}>
      <Button value="Close" onClick={dispatchToggleModal} />
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

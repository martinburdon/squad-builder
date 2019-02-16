import React from 'react';
import Modal from 'react-modal';
import ShirtOptionsContainer from '../ShirtOptions/ShirtOptionsContainer.jsx';
import PlayerOptionsContainer from '../PlayerOptions/PlayerOptionsContainer.jsx';
import { connect } from 'react-redux';
import {
  setModalComponent,
  toggleModal
} from '../../actions/index.js';
import styled from 'styled-components';

const CloseButton = styled.button`
  border: none;
  color: #ababab;
  cursor: pointer;
  font-size: 2rem;
  height: 3rem;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 3rem;
`;

const customStyles = {
  content: {
    bottom: 'auto',
    marginRight: '-50%',
    maxWidth: '36rem',
    left: '50%',
    padding: '2rem 3rem',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%'
  }
};

Modal.setAppElement('#root');

const ModalManager = ({
  modalComponent,
  modalPayload,
  modalIsOpen,
  dispatchSetModalComponent,
  dispatchToggleModal
}) => {
  let childComponent = false;
  if (modalComponent === 'shirtOptions') childComponent = <ShirtOptionsContainer {...modalPayload} />;
  if (modalComponent === 'playerOptions') childComponent = <PlayerOptionsContainer {...modalPayload} />;

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={dispatchToggleModal}
      style={customStyles}
    >
      <CloseButton onClick={dispatchToggleModal} aria-label="Close modal">&times;</CloseButton>
      {childComponent}
    </Modal>
  );
};

const mapStateToProps = state => ({
  modalComponent: state.modals.modalComponent,
  modalPayload: state.modals.modalPayload,
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

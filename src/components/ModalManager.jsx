import React from 'react';
import Modal from 'react-modal';
import ShirtOptionsContainer from './ShirtOptionsContainer.jsx';
import PlayerOptionsContainer from './PlayerOptionsContainer.jsx';
import Button from './Button.jsx';

Modal.setAppElement('#root');

export default ({
  modalComponent,
  players,
  editingPositionId,
  playerNameOnChange,
  modalIsOpen,
  closeModal
}) => {
  let childComponent = false;
  if (modalComponent === 'shirtOptions') {
    childComponent = <ShirtOptionsContainer />;
  }

  if (modalComponent === 'playerOptions') {
    childComponent = <PlayerOptionsContainer
      players={players}
      editingPositionId={editingPositionId}
      playerNameOnChange={playerNameOnChange}
    />;
  }

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
      <Button value="Close" onClick={closeModal} />
      {childComponent}
    </Modal>
  );
};

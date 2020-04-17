import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
  return (
    // !! returns a valid string as true and undefined as false
    <Modal
      onRequestClose={props.handleModalClose}
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleModalClose}>Close</button>
    </Modal>
  );
};

export default OptionModal;

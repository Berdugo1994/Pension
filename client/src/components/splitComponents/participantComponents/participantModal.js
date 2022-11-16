import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ParticipantDetails from "../modal/participant_details";
import "../../../css/participant_modal.css";

export function ParticipantModal() {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState(false);
  const [changed, setChanged] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProducts(false);
  };
  const handleShow = () => {
    setProducts(false);
    setShow(true);
  };
  const displayProducts = (status) => {
    if (status) {
      handleShow(true);
      setProducts(true);
    }
  };
  const save = () => {
    console.log("Save");
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Button
          variant='primary'
          onClick={handleShow}
          style={{ minWidth: "30%" }}
        >
          Add Participant
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div id='modal-header-container'>
            <Button
              variant='primary'
              disabled={!products}
              onClick={() => handleShow()}
            >
              Info
            </Button>
            <Modal.Title>Username</Modal.Title>
            <div id='modal-header-products-button'>
              <Button
                variant='primary'
                disabled={products}
                onClick={() => displayProducts(true)}
              >
                Products
              </Button>

              <Button
                variant='success'
                disabled={!changed}
                onClick={() => save()}
              >
                Save
              </Button>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>{products ? <div>a</div>: <ParticipantDetails/>}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import ParticipantInfo from "./participantInfo";
import "../../../../css/Split/participant_modal.css";

import ParticipantProducts from "./participantProducts";

export default function ParticipantContent({ showModal, save, data }) {
  console.log("ParticipantContent render", data);
  const [showProducts, setShowProducts] = useState(false);
  const [updatedName, setUpdatedName] = useState(data.profile.name);

  function updateField(fieldName, value) {
    switch (fieldName) {
      case "amount":
        data.profile.amount = value;
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Modal.Header closeButton>
        <div id="modal-header-container">
          <div id="modal-header-info">
            <Button
              variant="primary"
              disabled={!showProducts}
              onClick={() => setShowProducts(false)}
            >
              Info
            </Button>
          </div>
          <Form.Control
            style={{
              maxWidth: "40%",
              textAlign: "center",
              textDecoration: "underline",
            }}
            type="text"
            placeholder={updatedName == "" ? "Insert Name" : null}
            plaintext
            onChange={(e) => {
              setUpdatedName(e.target.value);
            }}
            value={updatedName}
          />
          <div id="modal-header-products-button">
            <Button
              variant="primary"
              disabled={showProducts}
              onClick={() => setShowProducts(true)}
            >
              Products
            </Button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        {showProducts ? (
          <ParticipantProducts data={data} updateField={updateField} />
        ) : (
          <>
            <ParticipantInfo data={data} updateField={updateField} />
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => showModal(false)}>
          Close
        </Button>
        {/* <Button variant="primary" onClick={() => save()}> */}
        <Button
          variant="primary"
          onClick={() => {
            console.log(data);
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../../../../css/Split/participant_modal.css";
import ProductTable from "./productTable";
import { FaPen } from "react-icons/fa";

export default function ProductContent({ showModal, save, data }) {
  const [updatedName, setUpdatedName] = useState(data.product.name? data.product.name: "");
  const btnNameRef = useRef();

  function updateField(fieldName, value) {
    data[fieldName] = value;
  }

  function focusRef(ref) {
    ref.current.focus();
  }

  return (
    <>
      <Modal.Header closeButton>
        <div id="modal-header-container">
          <Form.Control
            style={{textDecoration:"underline"}}
            ref={btnNameRef}
            type="text"
            placeholder={updatedName == "" ? "Insert Name" : null}
            plaintext
            onChange={(e) => {
              setUpdatedName(e.target.value);
            }}
            value={updatedName}
          />
        </div>
      </Modal.Header>
      <Modal.Body>
        <ProductTable data={data} updateField={updateField} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => showModal(false)}>
          Close
        </Button>
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

import React from "react";
import Modal from "react-bootstrap/Modal";
import "../../../css/Split/participant_modal.css";
import ParticipantContent from "./Participant/participantContent";
import ProductContent from "./Product/productContent";
import { PRODUCT, USER } from "../constants";

export default function ModalContainer({ kind, data, showModal }) {
  return (
    <div>
      <Modal show onHide={() => showModal(false)}>
        {kind == USER && (
          <ParticipantContent showModal={showModal} data={data.participant} />
        )}
        {kind == PRODUCT && (
          <ProductContent
            showModal={showModal}
            data={{
              product: data.product,
              allParticipants: data.allParticipants,
            }}
          />
        )}
      </Modal>
    </div>
  );
}

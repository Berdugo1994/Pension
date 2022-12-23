import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import { connect } from "react-redux";

//Style
import "../../../../css/Split/participant_table.css";
import { FaPen } from "react-icons/fa";

export default function ParticipantInfo({ data, updateField }) {
  const [updatedAmount, setUpdatedAmount] = useState(data.profile.amount);
  const headers = ["Amount", "Payed", "Remain"].map((str, ind) => {
    return <th key={ind}>{str}</th>;
  });

  const body = (
    <tr key="0">
      <td key="2">
        <Form.Select
          value={updatedAmount}
          onChange={(e) => {
            setUpdatedAmount(e.target.value); // For view
            updateField("amount", e.target.value);
          }}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </td>
      <td key="3">{data.profile["payed"]}</td>
      <td key="4">{data.profile["remain"]}</td>
    </tr>
  );
  return (
    <div id="participants_form">
      <Table striped bordered hover responsive>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{body}</tbody>
      </Table>
    </div>
  );
}

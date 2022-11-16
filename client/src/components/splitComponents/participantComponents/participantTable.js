import React, { useState } from "react";

import Table from "react-bootstrap/Table";

//style
import "../../../css/participant_table.css";

function ParticipantTable({ data }) {
  const headers = ["#", "Participant", "Amount", "Payed", "Remain"].map(
    (str) => {
      return <th>{str}</th>;
    }
  );

  function extractRow(ind) {
    return (
      <tr>
        <td key={0}>{ind + 1}</td>
        {data[ind]}
      </tr>
    );
  }
  return (
    <div id='participants_form'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>
          {extractRow(0)}
          {extractRow(1)}
        </tbody>
      </Table>
    </div>
  );
}

export default ParticipantTable;

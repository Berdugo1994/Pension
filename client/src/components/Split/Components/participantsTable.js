import React, { useState } from "react";

import Table from "react-bootstrap/Table";

//Utils
import { fetchUserData } from "../Utils/fetchData";

//style
import "../../../css/Split/participant_table.css";
function ParticipantsTable({ showUser }) {
  const dataRow1 = [
    <td
      onClick={() => {
        // fetchUserData(1).then((user) => {
        //   showUser(user);
        // });
        let userId = 1;
        showUser(userId);
      }}
      key="1"
    >
      Eden
    </td>,
    <td key="2">1</td>,
    <td key="3">0</td>,
    <td key="4">800</td>,
  ];
  const dataRow2 = [
    <td key="1">Edo</td>,
    <td key="2">2</td>,
    <td key="3">500</td>,
    <td key="4">1100</td>,
  ];
  const summaryData = [dataRow1, dataRow2];
  const headers = ["#", "Participant", "Amount", "Payed", "Remain"].map(
    (str, ind) => {
      return <th key={ind}>{str}</th>;
    }
  );

  function extractRow(ind) {
    return (
      <tr key={1 + ind}>
        <td key={0}>{ind + 1}</td>
        {summaryData[ind]}
      </tr>
    );
  }
  return (
    <div id="participants_form">
      <Table striped bordered hover responsive>
        <thead>
          <tr key={0}>{headers}</tr>
        </thead>
        <tbody>
          {extractRow(0)}
          {extractRow(1)}
        </tbody>
      </Table>
    </div>
  );
}

export default ParticipantsTable;

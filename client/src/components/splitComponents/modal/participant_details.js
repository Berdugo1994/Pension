import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

function ParticipantDetails({participantData}) {
  return <SingleParticipantTable data={participantData}/>;
}

ParticipantDetails.propTypes = {
  participantData: PropTypes.object,
};
const mapStateToProps = (state) => ({
  participantData: state.participant,
});

export default connect(mapStateToProps, {})(ParticipantDetails);

export function SingleParticipantTable({ data }) {
  const headers = ["Participant", "Amount", "Payed", "Remain", "Products"].map(
    (str) => {
      return <th>{str}</th>;
    }
  );

  function displayData(data) {
    return (
      <tr>
        <td>{data["name"]}</td>
        <td>{data["amount"]}</td>
        <td>{data["payed"]}</td>
        <td>{data["remain"]}</td>
        <td>{data["products"]}</td>
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
          {displayData(data)}
        </tbody>
      </Table>
    </div>
  );
}
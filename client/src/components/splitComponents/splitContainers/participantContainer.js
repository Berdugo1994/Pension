import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ParticipantModal } from "../participantComponents/participantModal";
// import { ParticipantDetails } from "./splitComponents/modal/participant_details";

//Components
import ParticipantTable from "../participantComponents/participantTable";

//css
import "../../../css/participant_container.css";

//Actions

function ParticipantContainer({}) {
  const dataRow1 = [<td>Eden</td>, <td>1</td>, <td>0</td>, <td>800</td>];
  const dataRow2 = [<td>Edo</td>, <td>2</td>, <td>500</td>, <td>1100</td>];
  const data = [dataRow1, dataRow2];
  return (
    <div id='participant_container'>
      <ParticipantTable data={data} />
      <ParticipantModal />
    </div>
  );
}
ParticipantContainer.propTypes = {};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(ParticipantContainer);

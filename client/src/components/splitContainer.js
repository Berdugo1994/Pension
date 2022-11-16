import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ParticipantContainer from "./splitComponents/splitContainers/participantContainer";

//css
import "../css/split_container.css";

//Actions

function SplitContainer({}) {
  return (
    <div id='split_container'>
      <ParticipantContainer />
    </div>
  );
}
SplitContainer.propTypes = {};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(SplitContainer);

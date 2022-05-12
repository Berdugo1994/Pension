import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//css
import "../css/pension_container.css";
import FormContainer from "./formContainer";
import PensionGraph from "./pensionGraph";

//Actions
import { setEmployment, setPensionData } from "../actions/pension";
import PensionChart from "./pensionChart";

function PensionContainer({
  pensionData,
  employemnt,
  setPensionData,
  setEmployment,
}) {
  console.log(employemnt);
  return (
    <div id='pensioncontainer'>
      <FormContainer
        setPensionData={setPensionData}
        setEmploymentAction={setEmployment}
      />
      {pensionData.length > 0 && (
        <div id='pension_graphs'>
          <PensionGraph pensionData={pensionData} />
          <PensionChart pensionData={pensionData} employemnt={employemnt} />
        </div>
      )}
    </div>
  );
}
PensionContainer.propTypes = {
  pensionData: PropTypes.array,
  setPensionData: PropTypes.func.isRequired,
  setEmployment: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  pensionData: state.pension.data,
  employemnt: state.pension.employment,
});
export default connect(mapStateToProps, { setPensionData, setEmployment })(
  PensionContainer
);

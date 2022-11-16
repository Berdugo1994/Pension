import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomForm from "./customForm";
import Graph from "./graph";

//Actions
import { setCustomData, customData } from "../actions/custom";

function CustomContainer({ customData }) {
  return (
    <div id='split'>
      <CustomForm setCustomData={setCustomData} />
      {customData.length > 0 && (
        <div>
          <Graph data={customData} />
        </div>
      )}
    </div>
  );
}
CustomContainer.propTypes = {
  customData: PropTypes.array,
  setCustomData: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  customData: state.custom.data,
});
export default connect(mapStateToProps, { setCustomData })(CustomContainer);

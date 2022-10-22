import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

export default function ToolTip({ context }) {
  return (
    <>
      <a data-for='custom-class' data-tip={context}>
        <i class='fa fa-question-circle' style={{ fontSize: "24px" }}></i>
      </a>
      <ReactTooltip
        id='custom-class'
        className='extraClass'
        delayHide={1000}
        effect='solid'
        multiline={true}
      />
    </>
  );
}

import React from "react";
//Actions
import { setParticipantData } from "../../../actions/participant";

function EditPencil({ doObj }) {
  return (
    <div id="edit-pencil">
      {<FaPen />} onClick=
      {() => {
        setParticipantData();
      }}
    </div>
  );
}
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { setParticipantData })(AddParticipant);

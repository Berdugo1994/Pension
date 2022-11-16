import { SET_PARTICIPANT_DATA } from "./types";

export const setParticipantData = (payload) => (dispatch) => {
  dispatch({ type: SET_PARTICIPANT_DATA, payload });
};

import { SET_ALL_PARTICIPANTS, SET_PARTICIPANT_DATA, SET_PARTICIPANT_PROFILE, SET_PRODUCT_DATA } from "./types";
export const setParticipantData = (payload) => (dispatch) => {
  dispatch({ type: SET_PARTICIPANT_DATA, payload });
};

export const setParticipantProfile = (payload) => (dispatch) => {
  dispatch({ type: SET_PARTICIPANT_PROFILE, payload });
};

export const setProductData = (payload) => (dispatch) => {
  dispatch({ type: SET_PRODUCT_DATA, payload });
};
export const setAllParticipants = (payload) => (dispatch) => {
  dispatch({ type: SET_ALL_PARTICIPANTS, payload });
};
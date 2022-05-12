import { SET_PENSION_DATA, REMOVE_PENSION_DATA, SET_EMPLOYMENT } from "./types";

export const setPensionData = (payload) => (dispatch) => {
  dispatch({ type: SET_PENSION_DATA, payload });
};
export const clearPensionData = () => (dispatch) => {
  dispatch({ type: REMOVE_PENSION_DATA });
};
export const setEmployment = (payload) => (dispatch) => {
  console.log(payload);
  dispatch({ type: SET_EMPLOYMENT, payload });
};

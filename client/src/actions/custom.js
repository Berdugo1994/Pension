import { SET_CUSTOM_DATA } from "./types";

export const setCustomData = (payload) => (dispatch) => {
  dispatch({ type: SET_CUSTOM_DATA, payload });
};

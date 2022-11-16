import { SET_PARTICIPANT_DATA } from "../actions/types";
const initialState = {
    name: "-",
    amount: -1,
    products: [],
    payed: -1,
    remain: -1
};
export default function participantReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PARTICIPANT_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

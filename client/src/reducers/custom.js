import { SET_CUSTOM_DATA } from "../actions/types";
const initialState = {
  data: [
    {
      returns: 5472,
      date: "Feb 22",
      totalInvestment: 4115,
    },
    {
      returns: 11410,
      date: "Mar 22",
      totalInvestment: 8230,
    },
    {
      returns: 16247,
      date: "Apr 22",
      totalInvestment: 12345,
    },
    {
      returns: 21378,
      date: "May 22",
      totalInvestment: 16460,
    },
  ],
};
export default function customReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CUSTOM_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
}

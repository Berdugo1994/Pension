import {
  SET_PENSION_DATA,
  REMOVE_PENSION_DATA,
  SET_EMPLOYMENT,
} from "../actions/types";
const initialState = {
  employment: "1",
  data: [
    {
      returns: 5472,
      date: "Feb 22",
      employerInvestment: 4115,
      employeeInvestment: 1560,
      totalInvestment: 5675,
    },
    {
      returns: 11410,
      date: "Mar 22",
      employerInvestment: 8230,
      employeeInvestment: 3120,
      totalInvestment: 11350,
    },
    {
      returns: 16247,
      date: "Apr 22",
      employerInvestment: 12345,
      employeeInvestment: 4680,
      totalInvestment: 17025,
    },
    {
      returns: 21378,
      date: "May 22",
      employerInvestment: 16460,
      employeeInvestment: 6240,
      totalInvestment: 22700,
    },
  ],
};
export default function pensionReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case SET_PENSION_DATA:
      return {
        ...state,
        data: payload,
      };
    case REMOVE_PENSION_DATA:
      return initialState;
    case SET_EMPLOYMENT:
      return {
        ...state,
        employment: payload,
      };
    default:
      return state;
  }
}

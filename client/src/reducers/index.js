import { combineReducers } from "redux";
import pension from "./pension";
import custom from "./custom";
export default combineReducers({
  pension,
  custom,
});

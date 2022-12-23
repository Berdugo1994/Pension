import { combineReducers } from "redux";
import pension from "./pension";
import custom from "./custom";
import split from "./split";
export default combineReducers({
  pension,
  custom,
  split,
});

import { combineReducers } from "redux";
import pension from "./pension";
import custom from "./custom";
import participant from "./participant";
export default combineReducers({
  pension,
  custom,
  participant,
});

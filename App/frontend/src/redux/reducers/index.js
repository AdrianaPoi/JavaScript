import { combineReducers } from "redux";
import { employeeReducer } from "./employeeReducers";

export const reducers = combineReducers({
  employeeReducer,
});

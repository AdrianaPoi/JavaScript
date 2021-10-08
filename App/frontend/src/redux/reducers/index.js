import { combineReducers } from "redux";
import { employeeReducer } from "./employeeReducers";
import { projectReducer } from "./projectReducers";

export const reducers = combineReducers({
  employeeReducer,
  projectReducer,
});

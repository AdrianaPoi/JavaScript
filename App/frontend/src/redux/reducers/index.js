import { combineReducers } from "redux";
import { employeeReducer } from "./employeeReducers";
import { projectReducer } from "./projectReducers";
import { authReducer } from "./authReducers";

export const reducers = combineReducers({
  employeeReducer,
  projectReducer,
  authReducer,
});

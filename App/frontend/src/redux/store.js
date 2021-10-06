import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import { getProjectsReducer } from "./reducers/projectReducers";
import { getProductsReducer } from "./reducers/employeeReducers";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProjects: getProjectsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  //INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

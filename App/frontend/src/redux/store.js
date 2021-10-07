import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers";
const middleware = [thunk];

const store = createStore(
  reducers,
  //INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

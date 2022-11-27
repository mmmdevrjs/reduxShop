import { combineReducers, createStore } from "redux";
// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// import thunk from "redux-thunk";
import { productReducer } from "./reducers/index";

const reducers = combineReducers({
  products: productReducer,
});

export const store = createStore(
  reducers
  // composeWithDevTools(applyMiddleware(thunk))
);

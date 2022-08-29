import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { reducer as loginReducer } from "./loginReducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  loginState: loginReducer,
});


export const store = createStore(
  rootReducer,
  // applyMiddleware(thunk)
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
console.log(store.getState());

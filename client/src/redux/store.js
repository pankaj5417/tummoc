import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { reducer as loginReducer } from "./loginReducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  loginState: loginReducer,
});
/*
function logger(store){
    //check if user login
    //if(!store2.getState().usertoken){return}
    return function(next){
        return function(action){
            //
        }
    }
}
*/

export const store = createStore(
  rootReducer,
  // applyMiddleware(thunk)
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
console.log(store.getState());

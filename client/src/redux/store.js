import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { todoReducers } from "./reducer/todoReducers";

const reducer = combineReducers({
  todos: todoReducers,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { todoReducers } from "./reducer/todoReducers";
import { tabReducer } from "./reducer/tabReducer";

const reducer = combineReducers({
  todos: todoReducers,
  currentTab: tabReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

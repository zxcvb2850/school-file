/*
*  综合所有的reduces
* */
import {createStore, combineReducers, applyMiddleware} from "redux";
import * as Login from "./login/reducers";
import thunk from "redux-thunk";

let store = createStore(
    combineReducers({...Login}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

export default store;
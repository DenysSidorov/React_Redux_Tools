import {createStore, applyMiddleware, compose } from "redux";
import createLogger from 'redux-logger';
import reducer from './reducers';
import thunk from 'redux-thunk';
let initialState ={
    counter: 5555,
    counter2: 5555 } ;

// devTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// logger
const logger = createLogger();

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;

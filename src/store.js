import {createStore, applyMiddleware} from "redux";
import createLogger from 'redux-logger';
import reducer from './reducers';
import thunk from 'redux-thunk';
let initialState ={
    counter: 5555,
    counter2: 5555 } ;

const logger = createLogger();
const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

export default store;

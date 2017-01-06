import {createStore, applyMiddleware} from "redux";
import createLogger from 'redux-logger';
import reducer from './reducers'
let initialState = {
    issues: [],
    // repository: {},
    counter: 6
};



const logger = createLogger();
const store = createStore(reducer, applyMiddleware( logger));

export default store;

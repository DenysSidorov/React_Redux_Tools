import {createStore, applyMiddleware} from "redux";
import createLogger from 'redux-logger';
import reducer from './reducers';
import thunk from 'redux-thunk';
let initialState = {
    issues: [],
    // repository: {},
    counter: 6
};



const logger = createLogger();
const store = createStore(reducer, applyMiddleware( logger));

export default store;

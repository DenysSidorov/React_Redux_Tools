import {createStore} from "redux";
import reducers from './reducers'
let initialState = {
    issues: [],
    // repository: {},
    counter: 0
};

const store = createStore(reducers, {} );


export default store;

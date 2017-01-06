import {createStore} from "redux";
import reducers from './reducers'
let initialState = {
    issues: [],
    repository: {},
    counter: 0
};

const store = createStore(reducers, {} );

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT_COUNTER':
//             return {...state, ...{counter: (state.counter + 1)}};
//         case 'DECREMENT_COUNTER':
//             return {...state, ...{counter: (state.counter - 1)}};
//         case 'RESET_COUNTER':
//             return {...state, ...{counter: 0}};
//         case 'LOAD_USSUES' : return {...state, ...{issues: action.payload}}
//         default:
//             return state;
//     }
// }

export default store;

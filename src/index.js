import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./state";

// test
// let myObj = {
//     issues: [1,2,3,4],
//     repository: {
//         id: 5,
//         name: 'Den',
//         books: [
//             {id:4, nameBook: 'Djek London'},
//             {id:77, nameBook: 'Sherlok Holms'}
//         ]},
//     phones: ['234-234','457-2134', '567-457'],
//     counter: 0
// };
// let changeFu = (state) =>{
//     // return {...state, ...{repository: (...state.repository.id +1 )}};
//
//     // return {...state, ...{counter: state.counter +6}} // добавили число
//     //  return {...state, ...{phones: [...state.phones, '999-999-999']}} // добавили телефон
//
// };
// console.log(myObj,  ' оригинал');
// console.log(changeFu(myObj), ' не оригинал');



store.subscribe(()=> console.log(store.getState()));
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'INCREMENT_COUNTER'});
store.dispatch({type: 'RESET_COUNTER'});
store.dispatch({type: 'LOAD_USSUES', payload: [{id: 1, name: 'Den'}, {id: 2, name: 'Viiii'}]});

ReactDOM.render(<App />, document.getElementById('root'));


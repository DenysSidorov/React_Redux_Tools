import {combineReducers} from "redux";
import counterReducer from './counter';
import issuesReducer from './issues';

const reducers = combineReducers({
    counterReducer,
    issuesReducer
});
export default reducers;
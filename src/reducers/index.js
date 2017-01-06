import {combineReducers} from "redux";
import counterReducer from './counter';
import issuesReducer from './issues';

const reducers = combineReducers({
    counter : counterReducer,
    issues : issuesReducer
});
export default reducers;
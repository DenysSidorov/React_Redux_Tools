import {combineReducers} from "redux";
import counterReducer from './counter';
import issuesReducer from './issues';
import { items, itemsHasErrored, itemsIsLoading } from '../components/chainik/reducers/items';

const reducers = combineReducers({
    counter : counterReducer,
    issues : issuesReducer,
    items,
    itemsHasErrored,
    itemsIsLoading
});
export default reducers;
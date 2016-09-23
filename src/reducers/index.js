/**
 * Created by SamMFFL on 2016/9/23.
 */
import {combineReducers} from 'redux';
import todos from './todos';

const reducers = combineReducers({
    todos
});

export default reducers;

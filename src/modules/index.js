import {combineReducers} from 'redux';
import dateInfo from './dateInfo';
import todos from './todos';

const rootReducer = combineReducers({
    dateInfo,
    todos
})

export default rootReducer;
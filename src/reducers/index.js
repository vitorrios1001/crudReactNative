import { combineReducers } from 'redux';
import custumersReducer from './custumer-reducer';

export default combineReducers({
    custumers: custumersReducer
});

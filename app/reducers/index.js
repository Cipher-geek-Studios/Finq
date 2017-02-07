// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './User';
import bill from './Bill';

export default combineReducers({
    login,
    bill,
    routing: routerReducer,
});

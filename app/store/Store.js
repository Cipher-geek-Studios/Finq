import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux'
// import promise from 'redux-promise-middleware';
import reducer from '../reducers';

const routMiddle = routerMiddleware(hashHistory);
const middleware = applyMiddleware(routMiddle, thunk, logger());
const store = createStore(reducer, middleware);

export default store;

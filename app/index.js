import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
//Import Stores and CSS
import store from './store/Store';
import './app.global.css';
//Import components
import App from './containers/App'//Don't remove this router will become loop
import Login from './components/Login';
import Home from './components/Home';

//Code goes here
const history = syncHistoryWithStore(hashHistory, store);

//Render to the app
render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}></IndexRoute>
          <Route path="/login" component={Home}></Route>
          <Route path="/logout" component={Login}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

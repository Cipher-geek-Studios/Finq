// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Message from './components/Message'


export default (
  <Route path="/app" component={App}>
    <IndexRoute component={HomePage} />
        // <Route path="/login/:username" component={Message}></Route>
  </Route>
);

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App.js';
import Home from './components/Home.js';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
  </Router>
);
export default Routes;

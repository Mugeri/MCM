import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App.js';
import Home from './components/Home.jsx';

render(
  <Router>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root'));

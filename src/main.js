import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App.js';
import Home from './components/Home';
import About from './components/About';
import Marathon from './components/Marathon';
import Gallery from './components/Gallery';
import TheTeam from './components/TheTeam';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/marathon" component={Marathon} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/team" component={TheTeam} />
    </Route>
  </Router>
);
export default Routes;

import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import Routes from './main';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
</Provider>,
  document.getElementById('root')
);

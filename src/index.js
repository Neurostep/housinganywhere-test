import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import Store from './store';

/* eslint react/jsx-filename-extension: 0 */
ReactDOM.render(
  <Provider store={Store()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

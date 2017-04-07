import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import Store from './store';

ReactDOM.render(
  <Provider store={Store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

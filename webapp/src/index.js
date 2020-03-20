import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './scss/index.scss';
import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './store';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  rootElement
);

serviceWorker.unregister();

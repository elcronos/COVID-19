import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'typeface-roboto';


import './scss/index.scss';
import * as serviceWorker from './serviceWorker';

import App from './App';
import store from './store';

import { IntlProvider } from 'react-intl';

import messages_en from './translations/en.json';
import messages_es from './translations/es.json';

const messages = {
  'en': messages_en,
  'es': messages_es,
};

const language = navigator.language.split(/[-_]/)[0];
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <IntlProvider locale={language} messages={messages[language]}>
        <App />
      </IntlProvider>
    </Router>
  </Provider>,
  rootElement
);

serviceWorker.unregister();

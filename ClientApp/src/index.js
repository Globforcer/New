import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-app-polyfill/ie11';
import I18N from './i18n';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <I18N>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>  
  </I18N>,
  rootElement);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/AppContainer/AppContainer';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {ProviderWrapper as AppProviderWrapper} from "contexts/AppContext"

ReactDOM.render(
  <React.StrictMode>
    <AppProviderWrapper>
      <AppContainer/>
    </AppProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

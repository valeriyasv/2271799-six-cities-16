import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error/error-message';
import { store } from './store';
import { fetchOffersAction } from './store/api-action';
import {checkAuthAction} from './store/api-action';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);

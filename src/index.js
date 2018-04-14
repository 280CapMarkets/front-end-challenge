import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import App from './views/components/app';
import configureStore from './core/store';


const store = configureStore();
const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

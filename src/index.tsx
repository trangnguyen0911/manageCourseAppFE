import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './web/App';
import { Provider } from 'react-redux';
import configureStore from "./configureStore";

const store = configureStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);


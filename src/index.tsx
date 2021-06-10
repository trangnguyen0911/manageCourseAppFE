import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './web/App';
import { Provider } from 'react-redux';
import configureStore from "./configureStore";

const store = configureStore();
const rootElement = document.getElementById("root");

/**
 * first file access when starting app
 * 
 * Version 1.0
 * 
 * Date 01-6-2021
 * 
 * Copyright
 * 
 * Modification Logs: 
 * DATE        AUTHOR    DESCRIPTION
 * ----------------------------------- 
 * 01-6-2021  TrangNTT46    Create
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import rootReducer from './core/rootReducer';
import {rootSaga} from './core/rootSaga';

/**
 * Define configure store contain root reducer and root saga
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

/**
 * create saga middleware
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * define configure store
 * @returns store
 */
const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};

/**
 * export default configure store
 */
export default configureStore;
// export const persistor = persistStore(configureStore());
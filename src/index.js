import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import createSagaMiddleware from 'redux-saga'

import App from './App';
import rootReducer from './reducers';
import rootSaga from './sagas'

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const defaultState = {};
const sagaMiddleware = createSagaMiddleware();

/**
 * Configure the redux store
 */
export const store = createStore(
  rootReducer(history),
  defaultState,
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ),
  ),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App history={history}/>
    </Provider>
  </AppContainer>, document.getElementById('root'));

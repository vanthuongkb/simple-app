import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import createRoutes from './routes';
import reducers from './reducers';

import NavBar from './Home/NavBarComponent';

const history = createHistory();
const middleware = routerMiddleware(history);

const enhancers = [
  applyMiddleware(...middleware),
];

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(...enhancers)
);

const routes = createRoutes(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NavBar />
        {routes.map(route => {
          return <Route {...route } key={route.name} />
        })}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
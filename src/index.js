import 'babel-polyfill';

import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/main.scss'

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router'

import { ConnectedRouter } from 'react-router-redux';

import createRoutes from './routes';
import configureStore from './store';

import NavBar from './components/NavBar';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
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
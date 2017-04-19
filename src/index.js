import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router'

import { ConnectedRouter } from 'react-router-redux';

import createRoutes from './routes';
import configureStore from './store';

import Layout from './Views/Layout';
import NotFound from './Views/NotFound';

import { PAGE_NOT_FOUND } from './constants';

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);
const routes = createRoutes(store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history} children={
      <Switch>
        <Route path={PAGE_NOT_FOUND} component={NotFound} />
        <Route path="/" render={() => (
          <Layout>
            <Switch>
              {routes.map((route, i) => (route.shouldRedirectTo ? <Redirect to={route.shouldRedirectTo} key={i} /> : <Route key={i} {...route} />))}
            </Switch>
          </Layout>)
        } />
      </Switch>
    } />
  </Provider>,
  document.getElementById('root')
);
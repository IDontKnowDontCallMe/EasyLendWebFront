import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import MainMenuPage from './routes/MainMenuPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainMenuPage} />
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default RouterConfig;

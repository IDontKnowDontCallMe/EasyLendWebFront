import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import MainMenuPage from './routes/MainMenuPage';
import QuickLoanPage from './routes/QuickLoanPage';
import NoContentPage from './routes/NoContentPage';
import HomePage from './routes/HomePage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/" component={MainMenuPage} >
        <IndexRoute components={QuickLoanPage}/>
        <Route path="/quickLoan" component={QuickLoanPage} />
        <Route path="/bidLoan" component={NoContentPage} />
        <Route path="/myLoan" component={NoContentPage} />
        <Route path="/investPlan" component={NoContentPage} />
        <Route path="/bidInvest" component={NoContentPage} />
        <Route path="/myInvest" component={NoContentPage} />
        <Route path="/toRefund" component={NoContentPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;

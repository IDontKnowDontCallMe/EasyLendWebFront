import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import MainMenuPage from './routes/MainMenuPage';
import QuickLoanPage from './routes/QuickLoanPage';
import NoContentPage from './routes/NoContentPage';
import HomePage from './routes/HomePage';
import MainPanelPage from './routes/MainPanelPage';
import AuthenticationPage from './routes/AuthenticationPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/" component={MainPanelPage} >
        <IndexRoute components={QuickLoanPage}/>
        <Route path="/quickLoan" component={QuickLoanPage} />
        <Route path="/bidLoan" component={NoContentPage} />
        <Route path="/myLoan" component={NoContentPage} />
        <Route path="/investPlan" component={NoContentPage} />
        <Route path="/bidInvest" component={NoContentPage} />
        <Route path="/myInvest" component={NoContentPage} />
        <Route path="/toRefund" component={NoContentPage} />
        <Route path="/authentication" component={AuthenticationPage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;

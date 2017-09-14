import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import HomePage from './routes/HomePage';
import MainPanelPage from './routes/MainPanelPage';
import BasicAuthPage from './routes/BasicInfoAuthPage';
import IncomeAuthPage from './routes/IncomeAuthPage';
import ZhiMaCreditAuthPage from './routes/ZhiMaCreditAuthPage';
import SchoolAuthPage from './routes/SchoolAuthPage';
import ICBCCardAuthPage from './routes/ICBCCardAuthPage';
import XueXinWangAuthPage from './routes/XueXinWangAuthPage';
import CreditReportPage from './routes/CreaditReportPage';
import CreditChartsPage from './routes/CreditChartsPage';
import InvestPage from './routes/InvestPage';
import PayBackPage from './routes/PayBackPage';
import RentMoneyPage from './routes/RentMoneyPage';
import NoContentPage from "./routes/NoContentPage";
import AuthCompletedMention from './components/AuthCompletedMention'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/homepage" component={HomePage}/>
      <Route path="/auth" component={MainPanelPage} >
        <IndexRoute components={BasicAuthPage}/>
        {/*<Route path="/auth/incomeAuth" component={IncomeAuthPage} />*/}
        <Route path="/auth/zhimaAuth" component={ZhiMaCreditAuthPage} />
        <Route path="/auth/schoolAuth" component={SchoolAuthPage} />
        <Route path="/auth/icbcAuth" component={ICBCCardAuthPage} />
        {/*<Route path="/auth/xuexinAuth" component={XueXinWangAuthPage} />*/}
        <Route path="/auth/basicAuth" component={BasicAuthPage} />
        <Route path="/auth/creditReport" component={CreditReportPage}/>
        <Route path="/auth/creditCharts" component={CreditChartsPage}/>
        <Route path="/auth/investment" component={InvestPage}/>
        <Route path="/auth/payBack" component={PayBackPage}/>
        <Route path="/auth/rentMoney" component={RentMoneyPage}/>
      </Route>
      <Route  path="/test" component={AuthCompletedMention} />
    </Router>
  );
}

export default RouterConfig;

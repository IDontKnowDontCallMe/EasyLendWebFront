import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'loginUser',
  state: {
    userId: 0,
    userName: '张三',
    surplusLoan: 2000,
    startRate: 3.5,
    endRate: 5.6,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (pathToRegexp('/quickLoan').exec(location.pathname)) {
          document.title = '严易贷-急速借款';
        }
        else if(pathToRegexp('/homepage').exec(location.pathname)) {
          document.title = '严易贷-首页';
        }

      });
    },
  },

};

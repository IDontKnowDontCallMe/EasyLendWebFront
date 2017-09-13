import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';

export default {
  namespace: 'loginUser',

  state: {
    userId: -1,
    userName: '张三',
    surplusLoan: 2000,
    startRate: 3.5,
    endRate: 5.6,

    showLoginForm: false,
    showRegisterForm: false,


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


  reducers:{

    showLoginForm(state, action){

      return {
        ...state,
        showLoginForm: true,
      }

    },

    showRegisterForm(state, action){

      return {
        ...state,
        showRegisterForm: true,
      }

    },

    closeLoginForm(state, action){

      return {
        ...state,
        showLoginForm: false,
      }

    },

    closeRegisterForm(state, action){

      return {
        ...state,
        showRegisterForm: false,
      }

    },


  },

};

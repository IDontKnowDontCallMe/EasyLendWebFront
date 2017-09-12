import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {ZhiMaAuth, getAuthState} from '../services/AuthService';

export default {

  namespace: 'ZhiMaAuth',
  state:{
    hasAuth: false,
  },

  subscriptions: {

    setup({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/auth/zhimaAuth').exec(location.pathname);
        if (match) {
          dispatch({
            type:'queryAuthState',
          });
        }

      });
    },

  },

  effects: {

    *queryAuthState({payload},{call, put, select}){

      const userId = yield select(state => state.loginUser.userId);

      const data = yield call(getAuthState, {userId: userId});

      if(data.code===0){
        if(data.message==='success'){
          if(data.hasZhiMaAuth){
            yield put({
              type:'authCompleted',
            });
          }
        }
      }

    },



    *doZhimaAuth({ payload }, { call, put, select }){

      const data = yield call(ZhiMaAuth, payload);

      if(data.code===0){
        if(data.message === 'success'){
          yield put({
            type:'authCompleted'
          });
        }
      }

    }



  },

  reducers: {

    authCompleted(state, action){

      return {
        ...state,
        hasAuth:true,
      }

    },

  }
}

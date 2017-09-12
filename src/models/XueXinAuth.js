import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {XueXinAuth, getAuthState} from '../services/AuthService';

export default {

  namespace: 'XueXinAuth',
  state:{
    hasAuth: false,
  },

  subscriptions: {

    setup({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/auth/xuexinAuth').exec(location.pathname);
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
          if(data.hasXueXinAuth){
            yield put({
              type:'authCompleted',
            });
          }
        }
      }

    },



    *doXueXinAuth({ payload }, { call, put, select }){

      const data = yield call(XueXinAuth, payload);

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

import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {ZhiMaAuth, getAuthState} from '../services/AuthService';

export default {

  namespace: 'ZhiMaAuth',
  state:{
    hasAuth: false,

    confirmLoading: false,
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

      const userId = yield select(state => state.loginUser.userPhone);

      const data = yield call(getAuthState, {phone: userId});

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



    *doZhiMaAuth({ payload }, { call, put, select }){

      yield put({
        type:'changeLoading'
      })

      const data = yield call(ZhiMaAuth, payload);

      if(data.code===0){
        if(data.message === 'success'){
          yield put({
            type:'authCompleted'
          });
        }
      }

      yield put({
        type:'changeLoading'
      })

    }



  },

  reducers: {

    authCompleted(state, action){

      return {
        ...state,
        hasAuth:true,
      }

    },

    changeLoading(state, action){

      return {
        ...state,
        confirmLoading: !state.confirmLoading,
      }

    },

  }
}

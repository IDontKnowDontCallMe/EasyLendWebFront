import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {ICBCAuth, getAuthState} from '../services/AuthService';

export default {

  namespace: 'ICBCAuth',
  state:{
    hasAuth: false,

    confirmLoading: false
  },

  subscriptions: {

    setup({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/auth/icbcAuth').exec(location.pathname);
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
          if(data.hasBankAuth){
            yield put({
              type:'authCompleted',
            });
          }
        }
      }

    },



    *doICBCAuth({ payload }, { call, put, select }){

      yield put({
        type:'changeLoading'
      })

      const data = yield call(ICBCAuth, payload);

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

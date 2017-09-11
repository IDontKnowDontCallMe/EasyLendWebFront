import pathToRegexp from 'path-to-regexp';
import {sendPhoneCode, checkFace, checkPhone, checkIdentify, getCheckState} from '../services/AuthenticationService';
import {message} from 'antd';

export default {

  namespace: 'authenticationPageState',
  state:{
    checkStep: 0,

  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/authentication').exec(location.pathname);
        if (match) {
          dispatch({
            type:'queryCheckState',

          });
        }

      });
    },

  },

  effects: {

    *queryCheckState({ payload }, { call, put, select }){

      const data = yield call(getCheckState, {});

      if(data){
        if(data.checkState){
          yield put({
            type:'updateCheckStep',
            payload: {
              checkState: data.checkState,
            }
          })
        }
      }

    },

    *sendPhoneCode({payload}, {call, put, select}){

      const data = yield call(sendPhoneCode, {phone: payload.phone,});

      if(data){
        if(data.message){

          message.success(data.message);

        }
      }

    },

    *checkPhone({payload}, {call, put, select}){

      const data = yield call(checkPhone, {phone: payload.phone, verifyCode: payload.verifyCode});

      if(data){
        if(data.code === 0){
          yield put({
            type:'updateCheckStep',
            payload: {
              checkState: 1,
            }
          })
        }
        else{
          message.error(data.message);
        }
      }

    },

    *checkFace({payload}, {call, put, select}){

      const data = yield call(checkFace, {});

      if(data){
        if(data.code === 0){
          yield put({
            type:'updateCheckStep',
            payload: {
              checkState: 2,
            }
          })
        }
        else{
          message.error(data.message);
        }
      }

    },

    *check({payload}, {call, put, select}){

      const data = yield call(checkIdentify, {phone: payload.phone, identfyId: payload.identfyId, name: payload.name});

      if(data){
        if(data.code === 0){
          yield put({
            type:'updateCheckStep',
            payload: {
              checkState: 3,
            }
          })
        }
        else{
          message.error(data.message);
        }
      }

    },

  },

  reducers: {

    updateCheckStep(state, action){

      return {
        ...state,
        checkStep: action.payload.checkState,
      }

    }

  }
}

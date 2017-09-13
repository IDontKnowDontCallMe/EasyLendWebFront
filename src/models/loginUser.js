import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import {message} from 'antd';
import {login, register, sendPhoneVerifiedCode} from '../services/UserService'

export default {
  namespace: 'loginUser',

  state: {
    userPhone: null,


    showLoginForm: false,
    showRegisterForm: false,

    canSend: true,
    count: 10,


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

  effects: {

    *login({payload},{call, put, select}){

        const data = yield call(login, payload);

        if(data.code===0){
          if(data.message==='success'){

            yield put({
              type:'updateUserPhone',
              payload:{userPhone:data.userPhone},
            })

            yield put({
              type:'closeLoginForm',
            })


          }
          else{
            message.error('用户名不存在或密码错误!')
          }


        }

    },

    *sendPhoneCode({payload}, {call, put, select}){

      const data = yield call(sendPhoneVerifiedCode, payload);

      if(data.code===0){
        if(data.message==='success'){

          message.success('验证码已发送!')

        }
        else {
          message.error('验证码错误!')
        }


      }

    },

    *register({payload}, {call,put, select}){

      const data = yield call(register, payload);

      if(data.code===0){
        if(data.message==='success'){

          yield put({
            type:'updateUserPhone',
            payload:{userPhone: payload.userPhone},
          })

          yield put({
            type:'closeRegisterForm',
          })

          message.success('注册成功!')

        }


      }

    },

  },


  reducers:{

    updateUserPhone(state, action){

      return {
        ...state,
        userPhone: action.payload.userPhone,
      }

    },

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

    updateCount(state, action){
      return {
        ...state,
        count: action.payload.count,
      }
    },

    setCanSend(state, action){

      return {
        ...state,
        canSend:true,
      }

    },

    setNotCanSend(state, action){

      return {
        ...state,
        canSend:false,
      }

    },


  },

};

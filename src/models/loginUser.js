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
        if (pathToRegexp('/auth/investment').exec(location.pathname)) {
          document.title = '未来信-投资';
        }
        else if(pathToRegexp('/auth/creditCharts').exec(location.pathname)) {
          document.title = '未来信-数据分析';
        }
        else if(pathToRegexp('/auth/creditReport').exec(location.pathname)) {
          document.title = '未来信-数据记录';
        }
        else if(pathToRegexp('/auth/basicAuth').exec(location.pathname)) {
          document.title = '未来信-基本信息认证';
        }
        else if(pathToRegexp('/auth/icbcAuth').exec(location.pathname)) {
          document.title = '未来信-工商银行卡绑定';
        }
        else if(pathToRegexp('/auth/schoolAuth').exec(location.pathname)) {
          document.title = '未来信-教务网认证';
        }
        else if(pathToRegexp('/auth/zhimaAuth').exec(location.pathname)) {
          document.title = '未来信-芝麻信用认证';
        }
        else if(pathToRegexp('/homepage').exec(location.pathname)) {
          document.title = '未来信-首页';
        }
        else if(pathToRegexp('/auth').exec(location.pathname)) {
          document.title = '未来信-基本信息认证';
        }
        else if(pathToRegexp('/').exec(location.pathname)) {
          document.title = '未来信-首页';
        }

      });

      const userPhone = sessionStorage.getItem('userPhone');

      if(userPhone && userPhone !== undefined){

        dispatch({
          type: 'updateUserPhone',
          payload: {userPhone: userPhone},
        });

      }

    },
  },

  effects: {

    *login({payload},{call, put, select}){

        const data = yield call(login, payload);

        if(data.code===0){
          if(data.message==='success'){

            sessionStorage.setItem('userPhone', payload.phone);

            yield put({
              type:'updateUserPhone',
              payload:{userPhone: payload.phone},

            });

            yield put({
              type:'basicInfoAuth/queryAuthState',
            });
            yield put({
              type:'ICBCAuth/queryAuthState',
            });
            yield put({
              type:'schoolAuth/queryAuthState',
            });
            yield put({
              type:'ZhiMaAuth/queryAuthState',
            });


            yield put({
              type:'closeLoginForm',
            })


          }
          else{
            message.error('用户名不存在或密码错误!')
          }


        }
        else {
          message.error(data.message)
        }

    },

    *sendPhoneCode({payload}, {call, put, select}){

      const data = yield call(sendPhoneVerifiedCode, payload);


      if(data.code===0){

        message.success('验证码已发送!')

        console.log(data)

      }
      else {
        message.error('手机格式不正确')
      }

    },

    *register({payload}, {call,put, select}){

      const data = yield call(register, payload);

      console.log(payload)

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
      else {
        message.error(data.message)
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

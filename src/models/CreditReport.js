import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {getAuthState} from '../services/AuthService';
import {getCreditReport} from '../services/CreditReportService';


export default {
  namespace: 'CreditReport',

  state: {
    hasAllAuth: false,

    data:null,

    idCard: null,
    stdNo: null,
    name: null,
    school: null,
    major: null,
    grade: null,
    gpa: null,
    home: null,
    motherName: null,
    motherIncome: null,
    motherJob: null,
    fatherName: null,
    fatherIncome: null,
    fatherJob: null,
    zhiMaCredit: null,
    consumeRecord: null,
    volunteerRecord: null,
    scholarship: null,
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen((location) => {
        const match = pathToRegexp('/auth/creditReport').exec(location.pathname);
        const match2 = pathToRegexp('/auth/creditCharts').exec(location.pathname);
        if (match || match2) {
          dispatch({
            type: 'ifAllAuthorized',
          });
        }
      });
    },
  },

  effects: {
    *ifAllAuthorized({payload},{call, put, select}){

      const userId = yield select(state => state.loginUser.userPhone);

      if(!userId){
        console.log('not login!!!')
        return;
      }

      const data = yield call(getAuthState, {phone: userId});

      if (data.code === 0) {
        if (data.message === 'success') {
          if (data.hasAllAuth) {
            yield put({
              type: 'authCompleted'
            });
            yield put({
              type: 'getCreditReport',
              payload: {phone:userId},
            });
          }
          else {
            message.error('请先完成所有验证!')
          }
        }
      }
    },

    *getCreditReport({payload}, {call, put}){
      const data = yield call(getCreditReport, payload);
      if (data[0][0]) {
        if (true) {
          console.log(data)
          yield put({
            type: 'setInfo',
            payload: {
              data: data,

              // idCard: payload.idCard,
              // stdNo: payload.stdNo,
              // name: payload.name,
              // school: payload.school,
              // major: payload.major,
              // grade: payload.grade,
              // gpa: payload.gpa,
              // home: payload.home,
              // motherName: payload.motherName,
              // motherIncome: payload.motherIncome,
              // motherJob: payload.motherJob,
              // fatherName: payload.fatherName,
              // fatherIncome: payload.fatherIncome,
              // fatherJob: payload.fatherJob,
              // zhiMaCredit: payload.zhiMaCredit,
              // consumeRecord: payload.consumeRecord,
              // volunteerRecord: payload.volunteerRecord,
              // scholarship: payload.scholarship
            },
          });
        }
      }
      else {
        message.error('网络错误')
      }
    }
  },

  reducers: {

    authCompleted(state, action){
      return {
        ...state,
        hasAllAuth: true,
      }
    },

    setInfo(state, action) {
      return {
        ...state,
        data: action.payload.data,
        idCard: action.payload.idCard,
        stdNo: action.payload.stdNo,
        name: action.payload.name,
        school: action.payload.school,
        major: action.payload.major,
        grade: action.payload.grade,
        gpa: action.payload.gpa,
        home: action.payload.home,
        motherName: action.payload.motherName,
        motherIncome: action.payload.motherIncome,
        motherJob: action.payload.motherJob,
        fatherName: action.payload.fatherName,
        fatherIncome: action.payload.fatherIncome,
        fatherJob: action.payload.fatherJob,
        zhiMaCredit: action.payload.zhiMaCredit,
        consumeRecord: action.payload.consumeRecord,
        volunteerRecord: action.payload.volunteerRecord,
        scholarship: action.payload.scholarship,
      }
    },
  }
}

import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';
import {basicAuth, getAuthState} from '../services/AuthService';

export default {

  namespace: 'basicInfoAuth',
  state:{
    hasAuth: false,
    identityCardPhoto: null,
    facePhoto: null,
    identityCardPhotoUrl: null,
    facePhotoUrl: null,

  },

  subscriptions: {

    setup({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/auth/basicAuth').exec(location.pathname);
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
          if(data.hasBasicAuth){
            yield put({
              type:'authCompleted',
            });
          }
        }
      }

    },



    *doBasicAuth({ payload }, { call, put, select }){

      const data = yield call(basicAuth, payload);

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

    updateIdentityCardPhoto(state, action){

      return {
        ...state,
        identityCardPhoto: action.payload.identityCardPhoto,
        identityCardPhotoUrl: action.payload.identityCardPhotoUrl,
      }

    },

    updateFacePhoto(state, action){

      return {
        ...state,
        facePhoto: action.payload.facePhoto,
        facePhotoUrl: action.payload.facePhotoUrl,
      }

    },

  }
}

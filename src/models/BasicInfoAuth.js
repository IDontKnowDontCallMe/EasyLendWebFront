import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';

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



  },

  reducers: {

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

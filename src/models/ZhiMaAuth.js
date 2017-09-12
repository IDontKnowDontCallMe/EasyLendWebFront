import pathToRegexp from 'path-to-regexp';
import {message} from 'antd';

export default {

  namespace: 'zhiMaAuth',
  state:{
    hasAuth: false,


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

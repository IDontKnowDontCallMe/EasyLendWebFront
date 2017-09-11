import pathToRegexp from 'path-to-regexp';
import { getBidDetail, getMyBidList} from '../services/LoanService';

export default {

  namespace: 'userBidListInfo',
  state:{
    bidList:[],
    listSize:0,
    startIndex:0,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        const match = pathToRegexp('/myBidList').exec(location.pathname);
        if (match) {
          dispatch({
            type:'queryBidList',

          });
        }

      });
    },

  },

  effects: {

    *queryBidList({ payload }, { call, put, select }){

      const loginUser = yield select(state => state.loginUser);

      const bidIdList = yield call(getMyBidList, {userId: 0});

      const result = [];

      for(let i in bidIdList){

        const t = yield call(getBidDetail, {bidId: i});
        result.push(t);
      }

      yield put({
        type:'updateBidList',
        payload: {
          bidList: result,
        }
      });

      yield put({
          type: 'updateBidListSize',
          payload: {
            listSize: result.length,
          }
      });

    },



  },

  reducers: {

    updateBidList(state, action){

      return {
        ...state,
        bidList: action.payload.bidList,
      }

    },

    updateBidListSize(state, action){

      return {
        ...state,
        listSize: action.payload.listSize,
      }

    },

    updateStartIndex(state, action){

      return {
        ...state,
        startIndex: action.payload.startIndex,
      }

    }

  }
}

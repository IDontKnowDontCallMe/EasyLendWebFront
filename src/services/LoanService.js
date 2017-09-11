export async function getMyBidList(param) {

  return [1,2,3,5,6,11,12,14,17,18,19,28,30];

}

export async function newFunc(param) {



}


export async function getBidDetail(param) {

  if(param.bidId % 3 ===0){
    return {
      code:0,
      message:"success",
      bidId:param.bidId,
      state:0,
      date: "2017-10-10 09:00:00",
      bidValidPeriod:7,
      loadDuration:3,
      rate: 5,
      borrowStyle:0,
      usage: "缺钱花",
      repayStyle:0,
      money:1200,
      moneyHasGot:0,
      progress:0,
      detail:{}

  };
  }
  else if(param.bidId % 3 === 1){
    return {
      code:0,
      message:"success",
      bidId:param.bidId,
      state:1,
      date: "2017-11-11 09:00:00",
      bidValidPeriod:7,
      loadDuration:3,
      rate: 5,
      borrowStyle:0,
      usage: "缺钱花",
      repayStyle:0,
      money:1200,
      moneyHasGot:0,
      progress:0,
      detail:{}
    };
  }
  else {
    return {
      code:0,
      message:"success",
      bidId:param.bidId,
      state:2,
      date: "2017-12-12 09:00:00",
      bidValidPeriod:7,
      loadDuration:3,
      rate: 5,
      borrowStyle:0,
      usage: "缺钱花",
      repayStyle:0,
      money:1200,
      moneyHasGot:0,
      progress:0,
      detail:{}
    }
  }

}

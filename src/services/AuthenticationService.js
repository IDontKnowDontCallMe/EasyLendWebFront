
export async function sendPhoneCode(param){

  return {
    code:0,
    message: "sendPhoneCode success",
  };

}

export async function checkPhone(param){

  if(param.phone === '15850790000' && param.verifyCode === '123456'){
    return {
      code:0,
      message:'checkPhone success',
    }
  }
  else{
    return {
      code: 1,
      message: 'checkPhone error',
    }
  }

}

export async function checkFace(param){

  return {
    code: 0,
    message: 'checkFace success',
  }

}

export async function checkIdentify(param){

  return {
    code: 0,
    message: 'checkIdentify success',
  }

}

export async function getCheckState(param){

  return {
    code: 0,
    message: 'getCheckState success',
    checkState: 0,
  }

}

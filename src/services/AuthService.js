

/*
*
* created at 2017.9.12 by SJL
*
* */




/*
  param{
    userId
    identityCardPhoto
    facePhoto
    parentName
    parentIncome
    parentPhone

  }
 */
export async function basicAuth(param) {

  console.log('AuthService: basicAuth');
  console.log(param);

  return {
    code: 0,
    message: 'succcess',
  };

}

/*
   param{
    userId
    schoolId
    password
   }

 */
export async function schoolAuth(param) {

  console.log('AuthService: schoolAuth');
  console.log(param);

  return {
    code: 0,
    message: 'succcess',
  };

}

/*
  param{
    userId
    cardId
    password
    userName
  }

 */
export async function ICBCAuth(param) {

  console.log('AuthService: ICBCAuth');
  console.log(param);

  return {
    code: 0,
    message: 'succcess',
  };

}

/*
  param{
    userId
    zhimaId
    password
  }
 */
export async function ZhiMaAuth(param) {

  console.log('AuthService: ZhiMaAuth');
  console.log(param);

  return {
    code: 0,
    message: 'succcess',
  };

}

/*
  param{
    userId
    scholarship: int
    partimeIncome: int
    livingCost:
    place: [string, string, string]
  }

 */
export async function incomeAuth(param) {

  console.log('AuthService: incomeAuth');
  console.log(param);

  return {
    code: 0,
    message: 'succcess',
  };

}

/*
   param{
    userId
    xuexinId
    password
   }

 */
export async function XueXinAuth(param) {

  console.log('AuthService: XueXinAuth');
  console.log(param);

  return {
    code: 0,
    message: 'succcess',
  };

}

/*
  param{
    userId
  }

 */
export async function getAuthState(param) {

  console.log('AuthService: getAuthState');
  console.log(param);

  return {
    code: 0,
    message: 'succcess',
    hasBasicAuth: false,
    hasXueXinAuth: false,
    hasZhiMaAuth: false,
    hasIncomeAuth: false,
    hasICBCAuth: false,
    hasSchoolAuth: false,
    hasAllAuth: false,
  };

}

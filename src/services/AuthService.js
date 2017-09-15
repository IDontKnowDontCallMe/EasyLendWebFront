import {request} from "../utils/request"

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

  // console.log('AuthService: basicAuth');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  // };



  const formdata = new FormData();
  formdata.append('phone',param.phone);
  formdata.append('identityCardPhoto', param.identityCardPhoto)
  formdata.append('facePhoto',param.facePhoto);
  formdata.append('motherName', param.motherName)
  formdata.append('motherIncome',param.motherIncome);
  formdata.append('motherJob', param.motherJob)
  formdata.append('fatherName',param.fatherName);
  formdata.append('fatherIncome', param.fatherIncome)
  formdata.append('fatherJob', param.fatherJob)


  return request('/credit/checkBasicData', {
    method: 'POST',
    body: formdata
  })

}

/*
   param{
    userId
    schoolId
    password
   }

 */
export async function schoolAuth(param) {

  // console.log('AuthService: schoolAuth');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  // };

  const formdata = new FormData();
  formdata.append('stdNo',param.stdNo);
  formdata.append('password', param.password)



  return request('/credit/academicSystem', {
    method: 'POST',
    body: formdata
  })

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

  // console.log('AuthService: ICBCAuth');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  // };

  const formdata = new FormData();
  formdata.append('phone', param.phone);
  formdata.append('bank_card', param.bankCard );

  return request('/credit/addBankCard', {
    method: 'POST',
    body: formdata
  })

}

/*
  param{
    userId
    zhimaId
    password
  }
 */
export async function ZhiMaAuth(param) {

  // console.log('AuthService: ZhiMaAuth');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  // };


  return request(`/credit/confirm_ZhiMaCredit?permit=1&phone=${param.phone}`, {
    method: 'GET',
  })

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
// export async function incomeAuth(param) {
//
//   console.log('AuthService: incomeAuth');
//   console.log(param);
//
//   return {
//     code: 0,
//     message: 'success',
//   };
//
// }

/*
   param{
    userId
    xuexinId
    password
   }

 */
// export async function XueXinAuth(param) {
//
//   console.log('AuthService: XueXinAuth');
//   console.log(param);
//
//   return {
//     code: 0,
//     message: 'success',
//   };
//
// }

/*
  param{
    userId
  }

 */
export async function getAuthState(param) {

  // console.log('AuthService: getAuthState');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  //   hasBasicAuth: false,
  //   hasXueXinAuth: false,
  //   hasZhiMaAuth: false,
  //   hasIncomeAuth: false,
  //   hasICBCAuth: false,
  //   hasSchoolAuth: false,
  //   hasAllAuth: false,
  // };

  let p = '?phone=';

  if(param.phone){
    p += param.phone;
  }
  else {
    p='';
  }


  return request('/credit/getCheckState'+p, {
    method: 'GET',
  })

}

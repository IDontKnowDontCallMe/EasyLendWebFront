
import {request} from '../utils/request';

/*
  created at 2017.9.12 by SJL
 */

/*
  param{
    userPhone: string
  }
 */
export async function sendPhoneVerifiedCode(param) {

  // console.log('UserService: sendPhoneVerifiedCode');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  //   verifiedCode: '233233',
  // };

  return request('/credit/sendPhoneCode', {
      method: 'POST',
      body: JSON.stringify({
        phone: param.userPhone,
    }),
  })




}

/*
  param{
    userPhone: string
    verifiedCode: string,
    password:string
  }
 */
export async function register(param){

  // console.log('UserService: register');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  //   userPhone: '15850793383',
  // };

  const p = '?phone=' + param.phone +  '&stdNo=' + param.stdNo + '&verifyCode=' + param.verifyCode + '&password=' + param.password;

  return request('/credit/checkPhone'+p, {
    method: 'GET',
  })

}

/*
  created at 2017.9.12 by SJL
 */
export async function login(param) {

  console.log('UserService: login');
  console.log(param);

  return {
    code: 0,
    message: 'success',
    userPhone: '15850793383',
  };

}




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

  const formData = new FormData();
  formData.append('phone', param.phone);

  // console.log(formData.getItem('phone'));

  return request('/credit/sendPhoneCode', {
      method: 'POST',
      body: formData,
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

  // const p = '?phone=' + param.phone +  '&stdNo=' + param.stdNo + '&verifyCode=' + param.verifyCode + '&password=' + param.password;

  const formdata = new FormData();
  formdata.append('phone',param.phone);
  formdata.append('verifyCode', param.verifyCode)
  formdata.append('stdNo',param.stdNo);
  formdata.append('password', param.password)

  return request('/credit/checkPhone', {
    method: 'POST',
    body: formdata
  })

}

/*
  created at 2017.9.12 by SJL
 */
export async function login(param) {

  // console.log('UserService: login');
  // console.log(param);
  //
  // return {
  //   code: 0,
  //   message: 'success',
  //   userPhone: '15850793383',
  // };

  const formdata = new FormData();
  formdata.append('phone',param.phone);
  formdata.append('password', param.password)

  return request('/credit/login', {
    method: 'POST',
    body: formdata
  })

}



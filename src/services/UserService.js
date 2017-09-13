
/*
  created at 2017.9.12 by SJL
 */

/*
  param{
    userPhone: string
  }
 */
export async function sendPhoneVerifiedCode(param) {

  console.log('UserService: sendPhoneVerifiedCode');
  console.log(param);

  return {
    code: 0,
    message: 'success',
    verifiedCode: '233233',
  };

}

/*
  param{
    userPhone: string
    verifiedCode: string,
    password:string
  }
 */
export async function register(param){

  console.log('UserService: register');
  console.log(param);

  return {
    code: 0,
    message: 'success',
    userPhone: '15850793383',
  };

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



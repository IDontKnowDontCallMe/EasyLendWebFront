import fetch from 'dva/fetch';

const host = 'http://120.27.199.164:5000'

function parse(response) {
  console.log(response)

  let promise = null;

  promise = response.json();

  return promise;

}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw response;
}

function handleError(response) {
  let promise = parse(response);

  if (promise == null) {
    return { status: response.status, ok: false };
  }

  return promise.then((data) => {
    data.status = response.status;
    data.ok = response.ok;
    return data;
  });
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch",such as
 {
   body : JSON.stringfy(obj),
   headers : {some header...}
 }
 * @return {object} response   the response body.
 *                             If status is not 2XX, response.ok == false
 *                             and response.status == http status code
 */
export function request(url, options) {
  if (options == null) {
    options = {};
  }

  if (options.headers == null) {
    options.headers = {};
  }

  if(options.headers['Content-Type'] == null){
    options.headers['Content-Type'] = 'application/json';
  }

  //options.headers['Access-Control-Allow-Origin'] = '*';



  return fetch(host + url, options)
    .then(checkStatus)
    .then(parse)
    .then((data) => {
      if (data == null) {
        data = {};
      }
      return data;
    })
    .catch(response => handleError(response));
}

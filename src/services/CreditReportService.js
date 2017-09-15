import {request} from "../utils/request"
/*
 param{
 userId: string
 }
 */
export async function getCreditReport(param) {

  return request(`/credit/getCreditReport?phone=${param.phone}`, {
    method: 'GET',
  });

}

import {request} from "../utils/request"
/*
 param{
 userId: string
 }
 */
export async function getCreditReport(param) {

  console.log('CreditReportService: getCreditReport');
  console.log(param);

  const p = '?phone=' + param.idCard + '&stdNo=' + param.stdNo + '&name=' + param.name + '&school=' + param.school
    + '&major=' + param.major + '&grade=' + param.grade + '&gpa=' + param.gpa + '&home=' + param.home + '&motherName =' + param.motherName
    + '&motherIncome=' + param.motherIncome + '&motherJob=' + param.motherJob + '&fatherName=' + param.fatherName + '&fatherIncome=' + param.fatherIncome
    + '&fatherJob=' + param.fatherJob + '&zhiMaCredit=' + param.zhiMaCredit + '&consumeRecord=' + param.consumeRecord
    + '&volunteerRecord=' + param.volunteerRecord + '&scholarship=' + param.scholarship;

  return request('/credit/getCreditReport' + p, {
    method: 'GET',
  });

}

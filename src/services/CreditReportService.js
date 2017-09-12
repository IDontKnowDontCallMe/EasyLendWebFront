
/*
  param{
    userId: string
  }
 */
export async function getCreditReport(param) {

  console.log('CreditReportService: getCreditReport');
  console.log(param);

  return {
    code: 0,
    message: 'success',

  };

}

import React from 'react';
import IncomeAuthForm from '../components/IncomeAuthForm';
import PageHeader from '../components/PageHeader.js';

/*
created at 2017.9.11 by SJL
 */

class IncomeAuthPage extends React.Component {

  render(){

    return (
      <div>
        <PageHeader headerName="收入情况录入"/>
        <IncomeAuthForm/>
      </div>
    );

  }

}

export default IncomeAuthPage;

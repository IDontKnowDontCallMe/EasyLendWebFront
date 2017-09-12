import React from 'react';
import ZhiMaAuthForm from '../components/ZhiMaAuthForm';
import PageHeader from '../components/PageHeader.js';

/*
created at 2017.9.11 by SJL
 */

class ZhiMaCreditAuthPage extends React.Component {

  render(){

    return(
      <div>
        <PageHeader headerName="芝麻信用认证"/>
        <ZhiMaAuthForm/>
      </div>
    );

  }

}

export default ZhiMaCreditAuthPage;

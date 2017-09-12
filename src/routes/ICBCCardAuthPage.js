import React from 'react';
import ICBCCardForm from '../components/ICBCCardAuthForm';
import PageHeader from '../components/PageHeader.js';

/*
created at 2017.9.11 by SJL
 */

class ICBCCardAuthPage extends React.Component {

  render() {

    return (
      <div>
        <PageHeader headerName="工商银行卡绑定"/>
        <ICBCCardForm/>
      </div>
    );

  }

}

export default ICBCCardAuthPage;

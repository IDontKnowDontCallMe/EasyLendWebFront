import React from 'react';
import SchoolAuthForm from '../components/SchoolAuthForm';
import PageHeader from '../components/PageHeader.js';

/*
created at 2017.9.11 by SJL
 */

class SchoolAuthPage extends React.Component {

  render(){

    return (

      <div>
        <PageHeader headerName="教务网认证"/>
        <SchoolAuthForm/>
      </div>

    );

  }

}

export default SchoolAuthPage;

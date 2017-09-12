import React from 'react';
import XueXinAuthForm from '../components/XueXinWangAuthForm';
import PageHeader from '../components/PageHeader.js';

/*
created at 2017.9.11 by SJL
 */

class XueXinWangAuthPage extends React.Component {

  render(){

    return (
      <div>
        <PageHeader headerName="学信网认证"/>
        <XueXinAuthForm/>
      </div>
    );

  }

}

export default XueXinWangAuthPage;

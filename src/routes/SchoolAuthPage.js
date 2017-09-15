import React from 'react';
import {connect} from 'dva';
import SchoolAuthForm from '../components/SchoolAuthForm';
import PageHeader from '../components/PageHeader.js';
import AuthCompletedMention from '../components/AuthCompletedMention';

/*
created at 2017.9.11 by SJL
 */

class SchoolAuthPage extends React.Component {


  doSchoolAuth = (param) => {

    if(this.props.loginUser.userPhone==null){
      this.props.dispatch({
        type:'loginUser/showLoginForm',
      })

      return;
    }
    else{
      this.props.dispatch({
        type:'schoolAuth/doSchoolAuth',
        payload: {...param}
      })
    }

  }

  render(){

    return (

      <div>
        <PageHeader headerName="教务网认证"/>

        {
          this.props.schoolAuth.hasAuth ?
            <AuthCompletedMention
              headerName="教务网认证 "
            />
            :
            <SchoolAuthForm
              doSchoolAuth={this.doSchoolAuth}
              userPhone={this.props.loginUser.userPhone}
              loading={this.props.schoolAuth.confirmLoading}
            />
        }

      </div>

    );

  }

}

function mapStateToProps({ schoolAuth,loginUser }) {
  return {
    schoolAuth,
    loginUser,
  };
}

export default connect(mapStateToProps)(SchoolAuthPage);

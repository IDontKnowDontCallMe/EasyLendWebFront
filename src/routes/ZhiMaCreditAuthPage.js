import React from 'react';
import ZhiMaAuthForm from '../components/ZhiMaAuthForm';
import PageHeader from '../components/PageHeader.js';
import AuthCompletedMention from '../components/AuthCompletedMention';
import {connect} from 'dva';


/*
created at 2017.9.11 by SJL
 */

class ZhiMaCreditAuthPage extends React.Component {

  doZhiMaAuth = (param) => {

    if(this.props.loginUser.userPhone==null){
      this.props.dispatch({
        type:'loginUser/showLoginForm',
      });
      return;
    }
    else{
      this.props.dispatch({
        type:'ZhiMaAuth/doZhiMaAuth',
        payload: {...param}
      })
    }
  };

  render(){

    return(
      <div>
        <PageHeader headerName="芝麻信用认证"/>
        {
          this.props.ZhiMaAuth.hasAuth ?
            <AuthCompletedMention
              headerName="芝麻信用 "
            />
            :
            <ZhiMaAuthForm
              doZhiMaAuth={this.doZhiMaAuth}
              userPhone={this.props.loginUser.userPhone}
              loading={this.props.ZhiMaAuth.confirmLoading}
            />
        }
      </div>
    );
  }
}

function mapStateToProps({ ZhiMaAuth,loginUser }) {
  return {
    ZhiMaAuth,
    loginUser,
  };
}

export default connect(mapStateToProps)(ZhiMaCreditAuthPage);

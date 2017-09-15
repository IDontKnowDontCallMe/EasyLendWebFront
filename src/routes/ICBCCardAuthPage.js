import React from 'react';
import {connect} from 'dva'
import ICBCCardForm from '../components/ICBCCardAuthForm';
import PageHeader from '../components/PageHeader.js';
import AuthCompletedMention from '../components/AuthCompletedMention';

/*
created at 2017.9.11 by SJL
 */

class ICBCCardAuthPage extends React.Component {

  doICBCAuth = (param) => {

    if(this.props.loginUser.userPhone==null){
      this.props.dispatch({
        type:'loginUser/showLoginForm',
      })

      return;
    }
    else{
      this.props.dispatch({
        type:'ICBCAuth/doICBCAuth',
        payload: {...param}
      })
    }

  }

  render() {

    return (
      <div>
        <PageHeader headerName="工商银行卡绑定"/>

        {
          this.props.ICBCAuth.hasAuth ?
            <AuthCompletedMention
              headerName="工行银行卡认证 "
            />
            :
            <ICBCCardForm
              doICBCAuth={this.doICBCAuth}
              userPhone={this.props.loginUser.userPhone}
              loading={this.props.ICBCAuth.confirmLoading}
            />
        }
      </div>
    );

  }

}

function mapStateToProps({ ICBCAuth, loginUser }) {
  return {
    ICBCAuth,
    loginUser
  };
}

export default connect(mapStateToProps)(ICBCCardAuthPage);

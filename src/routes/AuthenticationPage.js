import React from 'react';
import {connect} from 'dva';
import {Steps} from 'antd';
import PageHeader from '../components/PageHeader';
import AuthCompleteMention from '../components/AuthCompletedMention';
import PhoneAuthForm from '../components/PhoneAuthForm';
import FaceAuthForm from '../components/FaceAuthForm';
import IdentityCardAuthForm from '../components/IdentityCardAuthForm';

class AuthenticationPage extends React.Component {

  sendPhoneCode = (params) => {
    console.log(params)
    this.props.dispatch({
      type:'authenticationPageState/sendPhoneCode',
      payload: {...params},
    });
  }

  checkPhone = (params) => {
    console.log(params)
    this.props.dispatch({
      type:'authenticationPageState/checkPhone',
      payload: {...params},
    });
  }

  getAuthForm = () => {

    if(this.props.authenticationPageState.checkStep ===0){
      return <PhoneAuthForm
                sendPhoneCode={this.sendPhoneCode}
                checkPhone={this.checkPhone}
              />
    }
    else if(this.props.authenticationPageState.checkStep ===1){
      return <FaceAuthForm/>
    }
    else if(this.props.authenticationPageState.checkStep ===2){
      return <IdentityCardAuthForm/>
    }

  }

  render(){

    return (
      <div>
        <PageHeader headerName='身份验证'/>
        {
          this.props.authenticationPageState.checkStep === 3
            ?
            <AuthCompleteMention/>
            :
            <Steps current={this.props.authenticationPageState.checkStep}>
              <Steps.Step title="电话验证" />
              <Steps.Step title="人脸识别"/>
              <Steps.Step title="身份证验证" />
            </Steps>
        }
        {
          this.getAuthForm()
        }
      </div>
    );

  }

}


function mapStateToProps({ authenticationPageState }) {
  return {
    authenticationPageState,
  };
}

export default connect(mapStateToProps)(AuthenticationPage);

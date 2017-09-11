import React from 'react';
import {connect} from 'dva';
import {Steps} from 'antd';
import PageHeader from '../components/PageHeader';
import BasicInfoForm from '../components/BasicInfoForm';
import ZhiMaForm from '../components/ZhiMaForm';
import BankCreditForm from '../components/BankCreditForm';

class ActivatingLimitPage extends React.Component{

  getActivatingForm = () => {

    if(this.props.authenticationPageState.checkStep ===0){
      return <BasicInfoForm/>
    }
    else if(this.props.authenticationPageState.checkStep ===1){
      return <ZhiMaForm/>
    }
    else if(this.props.authenticationPageState.checkStep ===2){
      return <BankCreditForm/>
    }

  }

  render() {

    return (
      <div>
        <PageHeader headerName='激活额度'/>
        {
          this.props.authenticationPageState.checkStep === 3
            ?
            <AuthCompleteMention/>
            :
            <Steps current={this.props.authenticationPageState.checkStep}>
              <Steps.Step title="基本信息确认"/>
              <Steps.Step title="芝麻信用授权"/>
              <Steps.Step title="人民银行征信授权"/>
            </Steps>
        }
        {
          this.getActivatingForm()
        }
      </div>
    );

  }
}

function mapStateToProps({ authenticationPageState }) {
  return {
    authenticationPageState
  };
}

export default connect(mapStateToProps)(ActivatingLimitPage);


import React from 'react';
import {connect} from 'dva'
import BasicInfoAuthForm from '../components/BasicInfoAuthForm';
import PageHeader from '../components/PageHeader.js';
import AuthCompletedMention from '../components/AuthCompletedMention';

/*
created at 2017.9.11 by SJL
 */

class BasicInfoAuthPage extends React.Component {

    doBasicAuth = (param) => {

      if(this.props.loginUser.userPhone==null){
        this.props.dispatch({
          type:'loginUser/showLoginForm',
        })

        return;
      }
      else{

        this.props.dispatch({
          type:'basicInfoAuth/doBasicAuth',
          payload: {...param}
        })
      }


    }


    updateIdentityCardPhoto = (param) => {

      this.props.dispatch({
        type:'basicInfoAuth/updateIdentityCardPhoto',
        payload:{identityCardPhoto:param.file, identityCardPhotoUrl:param.url},
      });

    };

    updateFacePhoto = (param) => {

      this.props.dispatch({
        type:'basicInfoAuth/updateFacePhoto',
        payload:{facePhoto:param.file, facePhotoUrl:param.url},
      });

    };

    render(){

      return (
        <div>
          <PageHeader headerName="基本信息录入"/>
          {
            this.props.basicInfoAuth.hasAuth ?
              <AuthCompletedMention
                headerName="基本信息认证 "
              />
              :
              <BasicInfoAuthForm
                basicInfoAuth={this.props.basicInfoAuth}
                updateIdentityCardPhoto={this.updateIdentityCardPhoto}
                updateFacePhoto={this.updateFacePhoto}
                doBasicAuth={this.doBasicAuth}
                userPhone={this.props.loginUser.userPhone}
                loading={this.props.basicInfoAuth.confirmLoading}
              />
          }
        </div>
      );

    }

}

function mapStateToProps({ basicInfoAuth, loginUser }) {
  return {
    basicInfoAuth,
    loginUser,
  };
}

export default connect(mapStateToProps)(BasicInfoAuthPage);

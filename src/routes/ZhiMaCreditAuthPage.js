import React from 'react';
import ZhiMaAuthForm from '../components/ZhiMaAuthForm';
import PageHeader from '../components/PageHeader.js';
import AuthCompletedMention from '../components/AuthCompletedMention';
import {connect} from 'dva';


/*
created at 2017.9.11 by SJL
 */

class ZhiMaCreditAuthPage extends React.Component {

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
            <ZhiMaAuthForm/>
        }

      </div>
    );

  }

}

function mapStateToProps({ ZhiMaAuth }) {
  return {
    ZhiMaAuth,
  };
}

export default connect(mapStateToProps)(ZhiMaCreditAuthPage);

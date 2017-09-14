import React from 'react';
import {connect} from 'dva'
import ICBCCardForm from '../components/ICBCCardAuthForm';
import PageHeader from '../components/PageHeader.js';
import AuthCompletedMention from '../components/AuthCompletedMention';

/*
created at 2017.9.11 by SJL
 */

class ICBCCardAuthPage extends React.Component {

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
            <ICBCCardForm/>
        }
      </div>
    );

  }

}

function mapStateToProps({ ICBCAuth }) {
  return {
    ICBCAuth,
  };
}

export default connect(mapStateToProps)(ICBCCardAuthPage);

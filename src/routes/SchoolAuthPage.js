import React from 'react';
import {connect} from 'dva';
import SchoolAuthForm from '../components/SchoolAuthForm';
import PageHeader from '../components/PageHeader.js';
import AuthCompletedMention from '../components/AuthCompletedMention';

/*
created at 2017.9.11 by SJL
 */

class SchoolAuthPage extends React.Component {

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
            <SchoolAuthForm/>
        }

      </div>

    );

  }

}

function mapStateToProps({ schoolAuth }) {
  return {
    schoolAuth,
  };
}

export default connect(mapStateToProps)(SchoolAuthPage);

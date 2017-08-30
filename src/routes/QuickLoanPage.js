import React from 'react';
import { connect } from 'dva';
import PageHeader from '../components/PageHeader';
import QucikLoanForm from '../components/QuickLoanForm';

class QuickLoanPage extends React.Component {

  render() {
    return (
      <div>
        <PageHeader headerName='急速借款' />
        <QucikLoanForm loginUser={this.props.loginUser}/>
      </div>
    );
  }

}

function mapStateToProps({ loginUser }) {
  return {
    loginUser,
  };
}

export default connect(mapStateToProps)(QuickLoanPage);

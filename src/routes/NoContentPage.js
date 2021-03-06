import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {connect} from 'dva';
import {Button, Card, Image} from 'semantic-ui-react'
import styles from './NoContentPage.css';

const { Header, Content, Footer } = Layout;

class NoContentPage extends React.Component {

  onClick = () => {
    this.props.dispatch({
      type: 'CreditReport/ifAllAuthorized' ,
      // payload: {userPhone: '15558'},
      //, stdNo:'151250126', verifyCode:'666665', password:'123456'
    })
  }

  render() {
    return (
      <Button primary onClick={this.onClick}>click</Button>
    );
  }

}

function mapStateToProps({ loginUser, schoolAuth, CreditReport }) {
  return {
    loginUser,
    schoolAuth,
    CreditReport
  };
}

export default connect(mapStateToProps)(NoContentPage);

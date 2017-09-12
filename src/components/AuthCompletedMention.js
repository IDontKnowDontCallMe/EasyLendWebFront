import React from 'react';
import { Form, Input, Button } from 'antd';


/*
*
*  param{
*
*   authName:
*
*  }
*
* */
class AuthCompletedMention extends React.Component{

  render(){

    return (
      <div>
        {
          this.props.authName ?
            <div>{this.props.authName}已验证!</div> :
            <div>已验证。。。</div>
        }
      </div>
    );

  }

}

export default AuthCompletedMention;

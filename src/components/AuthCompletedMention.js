import React from 'react';
import { Message, Icon } from 'semantic-ui-react';


/*
*
*  param{
*
*   headerName:
*
*  }
*
* */
class AuthCompletedMention extends React.Component{

  render(){

    return (
      <Message
        icon
        size='massive'
        success
      >
        <Message.Content>
          <Message.Header>{this.props.headerName? this.props.headerName + '已完成' : '这里已认证'}</Message.Header>
          请前往完成其他认证或查看信用报告
        </Message.Content>
        <Icon name='checkmark' />

      </Message>
    );

  }

}

export default AuthCompletedMention;

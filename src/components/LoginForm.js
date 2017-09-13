import React from 'react';
import {Layout, Menu, Breadcrumb, Button, Dropdown, Icon, Modal, Form, Input, Checkbox, Row, Col, Tooltip} from 'antd';
import styles from './LoginForm.css';


class LoginCreatForm extends React.Component {

  render(){

    const {FormItem} = Form.Item;
    const { getFieldDecorator } = this.props.form;

    return (

      <Form onSubmit={this.props.onSubmit} style={{maxWidth: 300}}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入您的用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入您的密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className={styles.forgetForm}>忘记密码？</a>
        </FormItem>
      </Form>

    );

  }

}

LoginCreatForm = Form.create({})(LoginCreatForm);

class LoginForm extends React.Component {

  constructor(props){
    super(props);

    const { visible, onCancel, onSubmit, form } = props;

  }

  render(){



    return (
      <Modal
        visible={this.props.visible}
        title="登陆严易贷"
        okText="登陆"
        onCancel={this.props.onCancel}
        onOk={this.props.onSubmit}
        style={{maxWidth: 300}}
      >
        <LoginCreatForm
          onSubmit={this.props.onSubmit}
        />
      </Modal>
    );


  }

}

export default LoginForm;

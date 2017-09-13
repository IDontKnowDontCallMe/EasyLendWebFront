import React from 'react';
import {Layout, Menu, Breadcrumb, Button, Dropdown, Icon, Modal, Form, Input, Checkbox, Row, Col, Tooltip} from 'antd';
import styles from './RegisterForm.css';


class RegisterCreatForm extends React.Component {

  render(){

    const {FormItem} = Form.Item;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (

      <Form onSubmit={this.props.onSubmit} style={{maxWidth: 400}}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
                设置用户名&nbsp;
              <Tooltip title="6~18位字符，只能包含英文字母、数字、下划线">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请设置您的用户名', whitespace: true }],
          })(
            <Input />
          )}
          <Button >获取验证码</Button>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="验证码"
          hasFeedback
        >
          {getFieldDecorator('verifiedCode', {
            rules: [{
              required: true, message: '请输入手机验证码',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="设置密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请设置您的密码',
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>

      </Form>

    );

  }

}

RegisterCreatForm = Form.create({})(RegisterCreatForm);


class RegisterForm extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    const {FormItem} = Form.Item;
    const { visible, onCancel, onSubmit, form } = this.props;


    return (
      <Modal
        visible={visible}
        title="注册严易贷"
        okText="注册"
        onCancel={onCancel}
        onOk={onSubmit}
        style={{maxWidth: 400}}
      >
        <RegisterCreatForm
          onSubmit={onSubmit}
        />
      </Modal>
    );

  }


}


export default RegisterForm;

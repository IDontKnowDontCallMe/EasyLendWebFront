import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;


/*
*  required params: {
*
*     sendPhoneCode: function,
*     checkPhone: function,
*
*  }
*
* */

class PhoneAuthForm extends React.Component{

  onGetAuthCode = () => {

    this.props.form.validateFields((err, values) => {
      if (!err) {

        const phone = values['phoneNumber'];
        const param = {
          phone: phone,
        }

        this.props.sendPhoneCode(param);

      }
    });

  }

  onVerifyAuthCode = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        const phone = values['phoneNumber'];
        const verifyCode = values['verifyCode'];
        const param = {
          phone: phone,
          verifyCode: verifyCode,
        }

        this.props.checkPhone(param);

      }
    });

  }

  render(){

    return (
      <Form
        onSubmit={this.onVerifyAuthCode}
      >
        <FormItem
          label="手机号码"
        >
          {this.props.form.getFieldDecorator('phoneNumber', {
            rules: [{
              required: true, message: '请输入手机号码',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="验证码"
        >
          {this.props.form.getFieldDecorator('verifyCode')(
            <Input/>
          )}
          <Button type="primary" onClick={this.onGetAuthCode}>获取验证码</Button>
        </FormItem>
        <Button type="primary" htmlType="submit">验证手机</Button>
      </Form>
    );

  }

}

export default Form.create({})(PhoneAuthForm);

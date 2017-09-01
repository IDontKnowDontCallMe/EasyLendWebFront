import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class IdentityCardAuthForm extends React.Component{

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
      <Form>
        <Button type="primary" >身份证验证</Button>
      </Form>
    );

  }

}

export default Form.create({})(IdentityCardAuthForm);

import React from 'react';
import { Form, Input, Button,  } from 'antd';

const FormItem = Form.Item;

class BasicInfoForm extends React.Component{


  onConfirm = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        const userId = 0;
        const param = {
          userId: userId,
          workInfo: values['workInfo'],
          address: values['address'],
          person:{
            name: values['name'],
            relationship: values['relationship'],
            phone: values['phone'],
          }
        }

        console.log(param);

      }
    });

  }

  render(){

    return (
      <Form
        onSubmit={this.onConfirm}
      >
        <div>
          <FormItem
            label="工作信息"
          >
            {this.props.form.getFieldDecorator('workInfo', {
              rules: [{
                required: true, message: '请输入工作信息',
              }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            label="住址"
          >
            {this.props.form.getFieldDecorator('address',  {
              rules: [{
                required: true, message: '请输入住址',
              }],
            })(
              <Input/>
            )}
          </FormItem>
        </div>
        <div>
          <FormItem
            label="关系"
          >
            {this.props.form.getFieldDecorator('relationship',  {
              rules: [{
                required: true, message: '请输入您与紧急联系人的关系',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            label="姓名"
          >
            {this.props.form.getFieldDecorator('name',  {
              rules: [{
                required: true, message: '请输入紧急联系人姓名',
              }],
            })(
              <Input/>
            )}
          </FormItem>
          <FormItem
            label="电话"
          >
            {this.props.form.getFieldDecorator('phone',  {
              rules: [{
                required: true, message: '请输入紧急联系人联系电话',
              }],
            })(
              <Input/>
            )}
          </FormItem>
        </div>
        <Button type="primary" htmlType="submit">确认</Button>
      </Form>
    );

  }

}

export default Form.create({})(PhoneAuthForm);

import React from 'react'
import { Form, Input, Button} from 'antd'

const FormItem = Form.Item;


class SchoolAuthForm extends React.Component {

  onConfirm = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        const param = {
          stdNo: values['schoolId'],
          password: values['password'],
          phone: this.props.userPhone,
        };

        this.props.doSchoolAuth(param);

      }
    });

  }

  render(){

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form onSubmit={this.onConfirm}>
        <div>

          <FormItem
            {...formItemLayout}
            label="教务网账号"
          >
            {getFieldDecorator('schoolId', {
              rules: [{ required: true, message: '请输入教务网账号！' }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="密码"
          >
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码！' }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            wrapperCol={{ span: 12, offset: 6 }}
          >
            {getFieldDecorator('submit')(
              <Button type="primary" htmlType="submit" loading={this.props.loading}>确认</Button>
            )}
          </FormItem>

        </div>

      </Form>
    );

  }

}

export default Form.create({})(SchoolAuthForm);



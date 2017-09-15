import React from 'react'
import { Form, Input, Button} from 'antd'

const FormItem = Form.Item;


class ICBCCardAuthForm extends React.Component {


  onConfirm = (e) => {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        const param = {
          stdNo: values['stdNo'],
          bank_card: values['cardId'],
          phone: this.props.userPhone,
        };

        this.props.doICBCAuth(param);

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
            label="银行卡号"
          >
            {getFieldDecorator('cardId', {
              rules: [{ required: true, message: '请输入银行卡号！' }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="持卡人学号"
          >
            {getFieldDecorator('stdNo', {
              rules: [{ required: true, message: '请输入持卡人学号！' }],
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

export default Form.create({})(ICBCCardAuthForm);

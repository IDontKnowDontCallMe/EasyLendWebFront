import React from 'react'
import { Form, Input, Button} from 'antd'

const FormItem = Form.Item;


class ZhiMaAuthForm extends React.Component {


  render(){

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form>
        <div>

          <FormItem
            {...formItemLayout}
            label="芝麻信用账号"
          >
            {getFieldDecorator('zhimaId', {
              rules: [{ required: true, message: '请输入芝麻信用账号！' }],
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
              <Button type="primary" htmlType="submit" >确认</Button>
            )}
          </FormItem>

        </div>

      </Form>
    );

  }

}

export default Form.create({})(ZhiMaAuthForm);
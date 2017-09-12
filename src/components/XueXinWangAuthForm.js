import React from 'react'
import { Form, Input, Button} from 'antd'

const FormItem = Form.Item;


class XueXinWangAuthForm extends React.Component {


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
            label="学信网账号"
          >
            {getFieldDecorator('xuexinId', {
              rules: [{ required: true, message: '请输入学信网账号！' }],
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

export default Form.create({})(XueXinWangAuthForm);

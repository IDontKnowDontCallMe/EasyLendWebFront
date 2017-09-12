import React from 'react'
import {Cascader, Form, Input, Button} from 'antd'
import areaOptions from '../utils/ChinaArea';

const FormItem = Form.Item;

class IncomeAuthForm extends React.Component {

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
            label="平均年奖学金"
          >
            {getFieldDecorator('scholarship', {
              rules: [{ required: true, message: '请输入奖学金！' }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="平均月兼职收入"
          >
            {getFieldDecorator('partimeIncome', {
              rules: [{ required: true, message: '请输入兼职收入！' }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="平均月生活费"
          >
            {getFieldDecorator('livingCost', {
              rules: [{ required: true, message: '请输入月生活费！' }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="生源地"
          >
            {getFieldDecorator('area', {
               initialValue: ['320000','320100','320106'],
              //initialValue: ['江苏省','南京市','鼓楼区'],
              rules: [{ type: 'array', required: true, message: '请输入生源地!' }],
            })(
              <Cascader options={areaOptions} />
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

export default Form.create({})(IncomeAuthForm);

import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, InputNumber } from 'antd';

const FormItem = Form.Item;

class QuickLoanForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Received values of form');
  }

  checkLoanLimit = (rule, value, callback) => {
    if (!value) {
      callback();
    } else if (value <= 0) {
      callback('请输入大于0的借款金额!');
    } else if (value > this.props.loginUser.surplusLoan) {
      callback('剩余贷款额度不足!');
    } else {
      callback();
    }
  }


  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const getDayPeriodItem = () => {
      const result = [];
      for (let i = 7; i < 15; i++) {
        result.push(<Select.Option value={i+''}>{i}天</Select.Option>)
      }
      return result;
    }
    const getMonthPeriodItem = () => {
      const result = [];
      for (let i = 3; i < 24; i++) {
        result.push(<Select.Option value={i+''}>{i}月</Select.Option>)
      }
      return result;
    }
    return (
      <Form
        onSubmit={this.handleSubmit}
      >
        <div>当前剩余额度:{this.props.loginUser.surplusLoan}</div>
        <FormItem
          {...formItemLayout}
          label="借款金额"
        >
          {this.props.form.getFieldDecorator('loanNumber', {
            rules: [{
              required: true, message: '请输入大于0的借款金额',
            }, {
              validator: this.checkLoanLimit,
            }],
            initialValue: 1000,
          })(
            <InputNumber />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="借款标持续期"
        >
          {this.props.form.getFieldDecorator('bidValidPeriod', {
            initialValue: '7',
          })(
            <Select >
              {getDayPeriodItem()}
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="借款期限"
        >
          {this.props.form.getFieldDecorator('loanDuration', {
            initialValue: '3',
          })(
            <Select >
              {getMonthPeriodItem()}
            </Select>
          )}
        </FormItem>
        <Button>确定借款</Button>
      </Form>
    );
  }

}

export default Form.create({})(QuickLoanForm);

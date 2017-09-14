/**
 * Created by hyx on 2017/9/14.
 */

import React from 'react';
import PageHeader from '../components/PageHeader.js';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;


class PriceInput extends React.Component {
  constructor(props) {
    super(props);

    const value = this.props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState(value);
    }
  }
  handleNumberChange = (e) => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  };
  handleCurrencyChange = (currency) => {
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  };
  triggerChange = (changedValue) => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  };

  render() {
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}

class RentMoneyPage extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('目标借款金额必须大于0');
  };

  render() {
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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return (
      <div>
        <PageHeader headerName="借款"/>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="目标借款金额">
            {getFieldDecorator('price', {
              initialValue: { number: 0, currency: 'rmb' },
              rules: [{
                required: true, message: '请输入目标借款金额',
              }, {
                validator: this.checkPrice,
              }],
            })(<PriceInput />)}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="目标借款银行"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: '请选择目标借款银行' },
              ],
            })(
              <Select placeholder="请选择目标借款银行">
                <Option value="construction bank">中国建设银行</Option>
                <Option value="industry bank">中国工商银行</Option>
                <Option value="agriculture bank">中国农业银行</Option>
                <Option value="commercial bank">招商银行</Option>
                <Option value="business bank">兴业银行</Option>

              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="还款期限"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: '请选择还款期限' },
              ],
            })(
              <Select placeholder="请选择还款期限">
                <Option value="one">1个月</Option>
                <Option value="three">3个月</Option>
                <Option value="six">6个月</Option>
                <Option value="twelve">12个月</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="个人借款说明"
            hasFeedback
          >
            {getFieldDecorator('select', {
              rules: [
                { required: true, message: '请输入个人借款说明' },
              ],
            })(
              <TextArea rows={4} />
            )}
          </FormItem>

          <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我已阅读并同意<a href="">借款协议</a></Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">提交</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RentMoneyPage);

export default WrappedRegistrationForm;

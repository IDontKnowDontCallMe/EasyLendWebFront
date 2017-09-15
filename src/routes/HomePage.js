/**
 * Created by hyx on 2017/8/29.
 */

import { Layout, Menu, Breadcrumb, Button, Dropdown, Icon, Modal, Form, Input, Checkbox, Row, Col, Tooltip, message } from 'antd';
import React from 'react';
import styles from './HomePage.css';
import { Link, withRouter  } from 'dva/router';
import {connect} from 'dva'


const { Header, Content, Footer } = Layout;

/**
 * 信息认证选择列表
 * @type {XML}
 */
const menu_confirmInfo = (
  <Menu className={styles.menu}>
    <Menu.Item key="1"><Link to="/auth/basicAuth" >基本信息认证</Link></Menu.Item>
    {/*<Menu.Item key="2"><Link to="/auth/incomeAuth" >经济水平录入</Link></Menu.Item>*/}
    <Menu.Item key="3"><Link to="/auth/icbcAuth" >工行账户绑定</Link></Menu.Item>
    <Menu.Item key="4"><Link to="/auth/schoolAuth" >学校教务网认证</Link></Menu.Item>
    {/*<Menu.Item key="5"><Link to="/auth/xuexinAuth" >学信网认证</Link></Menu.Item>*/}
    <Menu.Item key="6"><Link to="/auth/zhimaAuth" >芝麻信用认证</Link></Menu.Item>
  </Menu>
);

/**
 * 信用评估报告选择列表
 * @type {XML}
 */
const menu_creditReport = (
  <Menu className={styles.menu}>
    <Menu.Item key="7"><Link to="/auth/creditReport">数据记录</Link></Menu.Item>
    <Menu.Item key="8"><Link to="/auth/creditCharts">数据分析</Link></Menu.Item>
  </Menu>
);

/**
 * 投资与借款选择列表
 * @type {XML}
 */
const menu_renting = (
  <Menu className={styles.menu}>
    <Menu.Item key="9"><Link to="/auth/investment">投资</Link></Menu.Item>
    <Menu.Item key="10"><Link to="/auth/rentMoney">借款</Link></Menu.Item>
    <Menu.Item key="11"><Link to="/auth/payBack">还款</Link></Menu.Item>
  </Menu>
);


const FormItem = Form.Item;

/**
 * 登陆表单
 * @type {*<TOwnProps>}
 */
const LoginCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onSubmit, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title="登陆未来信"
        okText="登陆"
        onCancel={onCancel}
        onOk={onSubmit}
        style={{maxWidth: 300}}
      >
        <Form onSubmit={onSubmit} style={{maxWidth: 300}}>
          <FormItem>
            {getFieldDecorator('userPhone', {
              rules: [{ required: true, message: '请输入您的用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="手机号" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className={styles.forgetForm}>忘记密码？</a>
            {/*<a href="">忘记密码？</a>*/}
            {/*<Button type="primary" htmlType="submit" className="login-form-button">*/}
            {/*Log in*/}
            {/*</Button>*/}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);


/**
 * 注册表单
 * @type {*<TOwnProps>}
 */
const RegisterCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onSubmit, form, onSendPhoneCode, canSend, count } = props;
    const { getFieldDecorator } = form;
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

    return (
      <Modal
        visible={visible}
        title="注册未来信"
        okText="注册"
        onCancel={onCancel}
        onOk={onSubmit}
        style={{maxWidth: 400}}
      >
        <Form onSubmit={onSubmit} style={{maxWidth: 400}}>
          <FormItem
            {...formItemLayout}
            label={(
              <span>
              手机号&nbsp;
                <Tooltip title="请输入您的手机号">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('userPhone', {
              rules: [{ required: true, message: '请输入您的手机号', whitespace: true }],
            })(
              <Input />
            )}
            <Button onClick={onSendPhoneCode} disabled={! canSend} >{canSend? '发送验证码': count+'秒'}</Button>
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="验证码"
            hasFeedback
          >
            {getFieldDecorator('verifiedCode', {
              rules: [{
                required: true, message: '请输入手机验证码',
              }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="学号"
            hasFeedback
          >
            {getFieldDecorator('stdNo', {
              rules: [{
                required: true, message: '请输入您的学号',
              }],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="设置密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请设置您的密码',
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
);


/**
 * UI界面
 */
class HomePage extends React.Component {

  showLoginModal = () => {
    this.props.dispatch({
      type: 'loginUser/showLoginForm',
    });
  };

  showRegisterModal = () => {
    this.props.dispatch({
      type: 'loginUser/showRegisterForm',
    });
  };

  handleCancel = () => {
    this.props.dispatch({
      type: 'loginUser/closeRegisterForm',
    });

    this.props.dispatch({
      type: 'loginUser/closeLoginForm',
    });

    let form = this.refs.loginForm;
    form.resetFields();
    form = this.refs.registerForm;
    form.resetFields();
  };

  // 登陆按钮监听
  handleLogin = () => {
    const form = this.refs.loginForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      const param = {
        phone: values['userPhone'],
        password: values['password'],
      }

      this.props.dispatch({
        type: 'loginUser/login',
        payload: {
          ...param,
        },
      });

      form.resetFields();
    });


  };

  saveFormRef = (form) => {
    this.form = form;
  };

  // 注册按钮监听
  handleRegister = () => {
    const form = this.refs.registerForm;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      const param = {
        phone: values['userPhone'],
        verifyCode: values['verifiedCode'],
        stdNo: values['stdNo'],
        password:values['password'],
      };

      this.props.dispatch({
        type: 'loginUser/register',
        payload: {
          ...param,
        },
      });
      form.resetFields();
    });
  };

  handleSendPhoneCode = () => {
    const form = this.refs.registerForm;

    const userPhone = form.getFieldValue('userPhone');

    if(!userPhone){
      message.error('请输入手机号');
      return;
    }

    if(this.props.loginUser.canSend){
      this.timer = setInterval(() => {
        var count = this.props.loginUser.count;
        this.props.dispatch({
          type: 'loginUser/setNotCanSend',
        });
        count -= 1;
        if (count < 1) {
          this.props.dispatch({
            type: 'loginUser/setCanSend',
          });
          this.props.dispatch({
            type: 'loginUser/updateCount',
            payload:{count:10},
          });

          clearInterval(this.timer);
        }
        else {
          this.props.dispatch({
            type: 'loginUser/updateCount',
            payload:{count:count},
          });
        }
      }, 1000);
    }


    const param = {
      phone: userPhone,
    };

    this.props.dispatch({
      type: 'loginUser/sendPhoneCode',
      payload: {
        ...param,
      },
    });
  };


  render() {
    return (
        <Layout className="layout" style={{ background: '#fff' }}>
          <Header style={{ background: 'transparent' }}>
            <div className={styles.logo}/>
            <div className={styles.logo2}/>

            {
              this.props.loginUser.userPhone ?
                <div>
                  <div className={styles.login_and_register} >退出</div>
                  <div className={styles.login_and_register} >{this.props.loginUser.userPhone}</div>
                </div>
                :
                <div>
                  <div className={styles.login_and_register} onClick={this.showLoginModal}>登陆</div>
                  <div className={styles.login_and_register} onClick={this.showRegisterModal}>注册</div>
                  <div className={styles.login_and_register}><Link  className={styles.link} to="/homepage">首页</Link></div>
                </div>
            }

            <LoginCreateForm
              ref='loginForm'
              visible={this.props.loginUser.showLoginForm}
              onCancel={this.handleCancel}
              onSubmit={this.handleLogin}
            />
            <RegisterCreateForm
              ref='registerForm'
              visible={this.props.loginUser.showRegisterForm}
              onCancel={this.handleCancel}
              onSubmit={this.handleRegister}
              onSendPhoneCode={this.handleSendPhoneCode}
              canSend={this.props.loginUser.canSend}
              count={this.props.loginUser.count}
            />
          </Header>

          <Content style={{ padding: '13px 50px 0px 50px' }}>
            <div className={styles.mainContent} style={{ padding: 24, minHeight: 515 }}>
              <div className={styles.buttonGroup}>
                <Dropdown overlay={menu_confirmInfo}>
                  <Button className={styles.button} size='large'>
                    信息认证 <Icon type="down" />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu_creditReport}>
                  <Button className={styles.button} size='large'>
                    信用评估报告 <Icon type="down" />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu_renting}>
                  <Button className={styles.button} size='large'>
                    投资与借款 <Icon type="down" />
                  </Button>
                </Dropdown>
              </div>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Easy Lend ©2017 Created by NJU team
          </Footer>
        </Layout>
    );
  }
}

function mapStateToProps({ loginUser }) {
  return {
    loginUser,
  };
}

export default connect(mapStateToProps)(HomePage);

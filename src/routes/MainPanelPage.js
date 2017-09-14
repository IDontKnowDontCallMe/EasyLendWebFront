/**
 * Created by hyx on 2017/9/11.
 */

import React from 'react';
import styles from './MainPanelPage.css';
import { Layout, Menu, Breadcrumb, Icon, Form, Button, Dropdown, Modal, Input, Checkbox, Row, Col, Tooltip, message} from 'antd';
import { Link } from 'dva/router';
import {connect} from 'dva'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


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
        title="登陆严易贷"
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
        title="注册严易贷"
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

class MainPanelPage extends React.Component {

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
        userPhone: values['userPhone'],
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
        userPhone: values['userPhone'],
        verifiedCode: values['verifiedCode'],
        password:values['password'],
      }

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
      userPhone: userPhone,
    }

    this.props.dispatch({
      type: 'loginUser/sendPhoneCode',
      payload: {
        ...param,
      },
    });



  };

  render() {
    return(
      <Layout>
        <Header className="header" style={{ background: '#fff', height: 80 }}>
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
        <Content style={{ padding: '25px 50px 25px 50px', background: '#F0F2F5' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user"/>信息认证</span>}>
                  <Menu.Item key="1"><Link to="/auth/basicAuth"/>基本信息认证</Menu.Item>
                  {/*<Menu.Item key="2"><Link to="/auth/incomeAuth"/>经济水平录入</Menu.Item>*/}
                  <Menu.Item key="3"><Link to="/auth/icbcAuth"/>工行账户绑定</Menu.Item>
                  <Menu.Item key="4"><Link to="/auth/schoolAuth"/>学校教务网认证</Menu.Item>
                  {/*<Menu.Item key="5"><Link to="/auth/xuexinAuth"/>学信网认证</Menu.Item>*/}
                  <Menu.Item key="6"><Link to="/auth/zhimaAuth"/>芝麻信用认证</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="solution" />信用评估报告</span>}>
                  <Menu.Item key="7"><Link to="/auth/creditReport"/>数据记录</Menu.Item>
                  <Menu.Item key="8"><Link to="/auth/creditCharts"/>数据分析</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="wallet" />投资与借款</span>}>
                  <Menu.Item key="9"><Link to="/auth/investment"/>投资</Menu.Item>
                  <Menu.Item key="10">借款</Menu.Item>
                  <Menu.Item key="11">还款</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 418 }}>
              {React.cloneElement(this.props.children)}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#404040' }}>
          <div className={styles.footerWords}>
            Easy Lend ©2017 Created by NJU team
          </div>
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

export default connect(mapStateToProps)(MainPanelPage);

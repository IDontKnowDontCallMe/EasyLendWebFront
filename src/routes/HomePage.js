/**
 * Created by hyx on 2017/8/29.
 */

import { Layout, Menu, Breadcrumb, Button, Dropdown, Icon, Modal, Form, Input, Checkbox, Row, Col, Tooltip } from 'antd';
import React from 'react';
import styles from './HomePage.css';
import { Link } from 'dva/router';
const { Header, Content, Footer } = Layout;


/**
 * 信息认证选择列表
 * @type {XML}
 */
const menu_confirmInfo = (
  <Menu className={styles.menu}>
    <Menu.Item key="1"><Link to="/auth/basicAuth" />基本信息认证</Menu.Item>
    <Menu.Item key="2"><Link to="/auth/incomeAuth" />经济水平录入</Menu.Item>
    <Menu.Item key="3"><Link to="/auth/icbcAuth" />工行账户绑定</Menu.Item>
    <Menu.Item key="4"><Link to="/auth/schoolAuth" />学校教务网认证</Menu.Item>
    <Menu.Item key="5"><Link to="/auth/xuexinAuth" />学信网认证</Menu.Item>
    <Menu.Item key="6"><Link to="/auth/zhimaAuth" />芝麻信用认证</Menu.Item>
  </Menu>
);

/**
 * 信用评估报告选择列表
 * @type {XML}
 */
const menu_creditReport = (
  <Menu className={styles.menu}>
    <Menu.Item key="7"><Link to="/auth/creditReport"/>数据记录</Menu.Item>
    <Menu.Item key="8">数据分析</Menu.Item>
  </Menu>
);

/**
 * 投资与借款选择列表
 * @type {XML}
 */
const menu_renting = (
  <Menu className={styles.menu}>
    <Menu.Item key="9">投资</Menu.Item>
    <Menu.Item key="10">借款</Menu.Item>
    <Menu.Item key="11">还款</Menu.Item>
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
        title="登陆严易贷"
        okText="登陆"
        onCancel={onCancel}
        onOk={onSubmit}
        style={{maxWidth: 300}}
      >
        <Form onSubmit={onSubmit} style={{maxWidth: 300}}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入您的用户名' }],
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
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
    const { visible, onCancel, onSubmit, form } = props;
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
              设置用户名&nbsp;
                <Tooltip title="6~18位字符，只能包含英文字母、数字、下划线">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
            )}
            hasFeedback
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请设置您的用户名', whitespace: true }],
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

  state = {
    visible1: false,
    visible2: false,
  };
  showLoginModal = () => {
    this.setState({ visible1: true });
  };
  showRegisterModal = () => {
    this.setState({ visible2: true });
  };
  handleCancel = () => {
    this.setState({ visible1: false, visible2: false });
    const form = this.form;
    form.resetFields();
  };

  // 登陆按钮监听
  handleLogin = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = (form) => {
    this.form = form;
  };

  // 注册按钮监听
  handleRegister = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };


  render() {
    return (
        <Layout className="layout" style={{ background: '#fff' }}>
          <Header style={{ background: 'transparent' }}>
            <div className={styles.logo}/>
            <div className={styles.logo2}/>
            <div className={styles.login_and_register} onClick={this.showLoginModal}>登陆</div>
            <LoginCreateForm
              ref={this.saveFormRef}
              visible={this.state.visible1}
              onCancel={this.handleCancel}
              onSubmit={this.handleLogin}
            />
            <div className={styles.login_and_register} onClick={this.showRegisterModal}>注册</div>
            <RegisterCreateForm
              ref={this.saveFormRef}
              visible={this.state.visible2}
              onCancel={this.handleCancel}
              onSubmit={this.handleRegister}
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


export default HomePage;

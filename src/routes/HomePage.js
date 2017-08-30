/**
 * Created by hyx on 2017/8/29.
 */

import { Layout, Menu, Breadcrumb, Button, Dropdown, Icon } from 'antd';
import React from 'react';
import styles from './HomePage.css';
const { Header, Content, Footer } = Layout;

function handleMenuClick(e) {
  console.log('click', e);
}

const menu_investment = (
  <Menu onClick={handleMenuClick} className={styles.menu}>
    <Menu.Item key="1">投资计划</Menu.Item>
    <Menu.Item key="2">散标投资</Menu.Item>
    <Menu.Item key="3">我的投资</Menu.Item>
  </Menu>
);

const menu_renting = (
  <Menu onClick={handleMenuClick} className={styles.menu}>
    <Menu.Item key="1">极速借款</Menu.Item>
    <Menu.Item key="2">散标借款</Menu.Item>
    <Menu.Item key="3">我的借款</Menu.Item>
  </Menu>
);

class HomePage extends React.Component {

  render() {
    return (
        <Layout className="layout" style={{ background: '#fff' }}>
          <Header style={{ background: 'transparent' }}>
            <div className={styles.logo}/>
            <div className={styles.logo2}/>
            <div className={styles.login_and_register}>登陆</div>
            <div className={styles.login_and_register}>注册</div>
          </Header>
          <Content style={{ padding: '13px 50px 0px 50px' }}>
            <div className={styles.mainContent} style={{ padding: 24, minHeight: 495 }}>
              <div className={styles.buttonGroup}>
                <Dropdown overlay={menu_investment}>
                  <Button className={styles.button} size='large'>
                    投资 <Icon type="down" />
                  </Button>
                </Dropdown>
                <Dropdown overlay={menu_renting}>
                  <Button className={styles.button} size='large'>
                    借款 <Icon type="down" />
                  </Button>
                </Dropdown>
                <Button className={styles.button} size='large'>还款</Button>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
    );
  }
}

export default HomePage;

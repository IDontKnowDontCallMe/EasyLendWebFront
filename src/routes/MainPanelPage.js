/**
 * Created by hyx on 2017/9/11.
 */

import React from 'react';
import styles from './MainPanelPage.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class MainPanelPage extends React.Component {

  render() {
    return(
      <Layout>
        <Header className="header" style={{ background: '#fff', height: 80 }}>
          <div className={styles.logo}/>
          <div className={styles.logo2}/>
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
                <SubMenu key="sub1" title={<span><Icon type="user" />信息认证</span>}>
                  <Menu.Item key="1">基本信息认证</Menu.Item>
                  <Menu.Item key="2">经济水平录入</Menu.Item>
                  <Menu.Item key="3">工行账户绑定</Menu.Item>
                  <Menu.Item key="4">学校教务网认证</Menu.Item>
                  <Menu.Item key="5">学信网认证</Menu.Item>
                  <Menu.Item key="6">芝麻信用认证</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />信用评估报告</span>}>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />投资与借款</span>}>
                  <Menu.Item key="7">投资</Menu.Item>
                  <Menu.Item key="8">借款</Menu.Item>
                  <Menu.Item key="9">还款</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 418 }}>
              Content
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

export default MainPanelPage;

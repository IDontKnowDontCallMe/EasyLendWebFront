import { Menu, Icon, Col, Row, Button, Layout } from 'antd';
import React from 'react';
import { Link } from 'dva/router';
import QuickLoanPage from './QuickLoanPage';
import styles from './MainMenuPage.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainMenuPage extends React.Component {
  state = {
    collapsed: true,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Layout>
        <Sider
        >
          <Menu
            style={{ width: 240 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>信息认证</span></span>}>
              <Menu.Item>基本信息登记</Menu.Item>
              <Menu.Item>担保人信息登记</Menu.Item>
              <Menu.Item>学信网认证</Menu.Item>
              <Menu.Item>芝麻信用认证</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>个人记录查询</span></span>}>
              <Menu.Item key="9">成绩记录</Menu.Item>
              <Menu.Item key="10">违纪处分记录</Menu.Item>
              <Menu.Item key="11">图书馆借书违约记录</Menu.Item>
              <Menu.Item key="12">欠款记录</Menu.Item>
              <Menu.Item key="12">志愿经历记录</Menu.Item>
              <Menu.Item key="12">校园卡消费记录</Menu.Item>
              <Menu.Item key="12">欠款记录</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>收入信息</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            {React.cloneElement(this.props.children)}
          </Content>
          <Footer>
            xxx ©2017 Created by xxx
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainMenuPage;

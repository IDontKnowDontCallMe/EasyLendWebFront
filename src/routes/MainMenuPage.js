import { Menu, Icon, Col, Row, Button, Layout } from 'antd';
import React from 'react';
import { Link } from 'dva/router';
import QuickLoanPage from './QuickLoanPage';

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
        <Header>
          <div style={{ float: 'left' }}>
            这是logo
          </div>
          <Menu
            mode="horizontal"
          >
            <SubMenu title={<span><Icon type="setting" />投资</span>}>
              <Menu.Item key="invest:1"><Link to="/investPlan" />投资计划</Menu.Item>
              <Menu.Item key="invest:2"><Link to="/bidInvest" />散标投资</Menu.Item>
              <Menu.Item key="invest:3"><Link to="/myInvest" />我的投资</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />借款</span>}>
              <Menu.Item key="loan:1"><Link to="/quickLoan" />极速借款</Menu.Item>
              <Menu.Item key="loan:2"><Link to="/bidLoan" />散标借款</Menu.Item>
              <Menu.Item key="loan:3"><Link to="/myLoan" />我的借款</Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />还款</span>}>
              <Menu.Item key="refund:1"><Link to="/toRefund" />我要还款</Menu.Item>
            </SubMenu>
          </Menu>
        </Header>
        <Layout>
          <Sider
            collapsible
          >
            <Menu>
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>身份认证</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>信用记录</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span>绑定银行卡</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="inbox" />
                <span>激活额度</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <div>
              {React.cloneElement(this.props.children)}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainMenuPage;


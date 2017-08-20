import { Menu, Icon, Col, Row} from 'antd';
import React from 'react';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainMenuPage extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    return (
      <Row type="flex" align="center" >
        <Col xs={20} sm={6} md={6} lg={6} >
          <Menu
            onClick={this.handleClick}
            style={{ width: 240 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="contacts" /><span>我的信用</span></span>}>
              <Menu.Item key="1">信用状况</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="bank" /><span>我要贷款</span></span>}>
              <Menu.Item key="3">我的额度</Menu.Item>
              <Menu.Item key="4">急速贷款</Menu.Item>
              <Menu.Item key="5">散表借款</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="wallet" /><span>我要还款</span></span>}>
              <Menu.Item key="6">我的账单</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="line-chart" /><span>我要投资</span></span>}>
              <Menu.Item key="7">散标投资</Menu.Item>
              <Menu.Item key="8">投资计划</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="schedule" /><span>认证管理</span></span>}>
              <Menu.Item key="9">身份证认证</Menu.Item>
              <Menu.Item key="10">手机认证</Menu.Item>
              <Menu.Item key="11">学历认证</Menu.Item>
              <Menu.Item key="12">工作认证</Menu.Item>
              <Menu.Item key="13">芝麻信用认证</Menu.Item>
            </SubMenu>
          </Menu>
        </Col>
        <Col xs={20} sm={16} md={16} lg={16} >
          <Row style={{ margin: '24px 0 0 24px' }}>
            <div>
              233
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default MainMenuPage;


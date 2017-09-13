/**
 * Created by hyx on 2017/9/13.
 */


import React from 'react';
import {Table} from 'antd';
import styles from './CreditReportPage.css';
import PageHeader from '../components/PageHeader.js';

var array = new Array();
array[0] = ['中银稳富131-34期', '5.17%', '如果本理财产品所投资的信托项目出现未及时足额支付理财计划本金及利息的情况,本理财产品的收益率可能低于预期最高收益率,收益可能为0,甚至发生本金损失。'];
array[1] = ['中银集富理财计划2014-001-HQ期', '5.0%', '如果本理财计划的交易对手或者所投资债券的发行人发生信用违约,则可能影响投资收益,甚至致使理财计划本金受到损失。'];
array[2] = ['中银智荟理财计划2014年004期', '5.45%', '如果本理财计划的交易对手或者所投资债券的发行人发生信用违约，则可能影响投资收益，甚至致使理财计划本金受到损失。'];


/**
 * 理财产品的表头
 * @type {*[]}
 */
const investment_columns = [{
  title: '#',
  dataIndex: 'number',
}, {
  title: '名称',
  dataIndex: 'name',
}, {
  title: '预期年化收益',
  dataIndex: 'expected_income',
}, {
  title: '风险',
  dataIndex: 'risk',
}, {
  title: '操作',
  dataIndex: 'operation',
  render: text => <a href="#">{text}</a>,
}];

/**
 * 理财产品的数据
 * @type {*[]}
 */
const investment_data = [];
for (let i = 0; i < 3; i++) {
  investment_data.push({
    key: i,
    number: i,
    name: array[i][0],
    expected_income: array[i][1],
    risk: array[i][2],
    operation: '投资',
  })
}

class InvestPage extends React.Component {
  render() {
    return (
      <div>
        <PageHeader headerName="数据记录"/>
        <div className={styles.table}>
          <Table
            columns={investment_columns}
            dataSource={investment_data}
            bordered
            title={() => '投资产品列表'}
            pagination={false}
          />
        </div>
      </div>
    );
  }
}

export default InvestPage;

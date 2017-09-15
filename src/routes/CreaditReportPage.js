/**
 * Created by hyx on 2017/9/12.
 */

import React from 'react';
import {Table} from 'antd';
import styles from './CreditReportPage.css';
import PageHeader from '../components/PageHeader.js';
import {connect} from 'dva';


/**
 * 基本信息的表头
 * @type {*[]}
 */
const basicData_columns = [{
  title: '真实姓名',
  dataIndex: 'name',
}, {
  title: '身份证号',
  dataIndex: 'IDCard',
}, {
  title: '生源地',
  dataIndex: 'home',
}, {
  title: '芝麻信用评分',
  dataIndex: 'ZhiMaCredit',
}, {
  title: '父亲',
  children: [{
    title: '职业',
    dataIndex: 'father_occupation',
  }, {
    title: '收入水平',
    dataIndex: 'father_revenue',
  }],
}, {
  title: '母亲',
  children: [{
    title: '职业',
    dataIndex: 'mother_occupation',
  }, {
    title: '收入水平',
    dataIndex: 'mother_revenue',
  }],
}];

/**
 * 基本信息的数据
 * @type {*[]}
 */
const basic_data = [{
  key: '1',
  name: '黄小白',
  IDCard: '32052219970718AAAA',
  home: '江苏省苏州市',
  ZhiMaCredit: '9.8',
  father_occupation: '程序员',
  father_revenue: '￥100,000/月',
  mother_occupation: '设计师',
  mother_revenue: '￥100,000/月',
}];



/**
 * 教育信息的表头
 * @type {*[]}
 */
const eduInfo_columns = [{
  title: '学校',
  dataIndex: 'university',
}, {
  title: '专业',
  dataIndex: 'major',
}, {
  title: '年级',
  dataIndex: 'grade',
}, {
  title: '学号',
  dataIndex: 'schoolNum',
}, {
  title: '综合GPA',
  dataIndex: 'gpa',
}];

/**
 * 教育信息的数据
 * @type {*[]}
 */
const eduInfo_data = [{
  key: '1',
  university: '南京大学',
  major: '软件工程',
  grade: '大三',
  schoolNum: '151250AAA',
  gpa: '5.0',
}];


/**
 * 银行卡消费的表头
 * @type {*[]}
 */
const bankAccount_columns = [{
  title: '#',
  dataIndex: 'number',
},{
  title: '消费日期',
  dataIndex: 'date',
}, {
  title: '消费类型',
  dataIndex: 'type',
}, {
  title: '消费金额',
  dataIndex: 'cost',
}];

/**
 * 银行卡消费的数据
 * @type {*[]}
 */
const bankAccount_data = [];
for (let i = 0; i < 18; i++) {
  bankAccount_data.push({
    key: i,
    number: i,
    date: '2017-07-18',
    type: '衣饰',
    cost: '￥299.0',
  })
}


/**
 * 奖学金的表头
 * @type {*[]}
 */
const scholarship_columns = [{
  title: '获奖日期',
  dataIndex: 'date',
}, {
  title: '奖项名称',
  dataIndex: 'name',
}, {
  title: '奖金',
  dataIndex: 'cost',
}];

/**
 * 奖学金的数据
 * @type {*[]}
 */
const scholarship_data = [];
for (let i = 0; i < 3; i++) {
  scholarship_data.push({
    key: i,
    date: '2016-07-18',
    name: '人民奖学金二等奖',
    cost: '￥2000.0',
  })
}


/**
 * 志愿的表头
 * @type {*[]}
 */
const volunteer_columns = [{
  title: '日期',
  dataIndex: 'date',
}, {
  title: '志愿活动名称',
  dataIndex: 'name',
}, {
  title: '志愿时长',
  dataIndex: 'period',
}];

/**
 * 志愿的数据
 * @type {*[]}
 */
const volunteer_data = [];
for (let i = 0; i < 2; i++) {
  volunteer_data.push({
    key: i,
    date: '2017-03-22',
    name: '感谢师恩你我同行',
    period: '4.0h',
  })
}


class CreaditReportPage extends React.Component {




  render() {
    return (
      <div>
        <PageHeader headerName="数据记录"/>
        {
          this.props.CreditReport.hasAllAuth ?
            <div>
              <div className={styles.table}>
                <Table
                  columns={basicData_columns}
                  dataSource={basic_data}
                  bordered
                  title={() => '报告基本信息'}
                  pagination={false}
                />
              </div>
              <div className={styles.table}>
                <Table
                  columns={eduInfo_columns}
                  dataSource={eduInfo_data}
                  bordered
                  title={() => '报告学校信息'}
                  pagination={false}
                />
              </div>
              <div className={styles.table}>
                <Table
                  columns={scholarship_columns}
                  dataSource={scholarship_data}
                  bordered
                  title={() => '报告奖学金获奖记录'}
                  showSizeChanger={true}
                  defaultPageSize={5}
                  pageSize={5}
                />
              </div>
              <div className={styles.table}>
                <Table
                  columns={volunteer_columns}
                  dataSource={volunteer_data}
                  bordered
                  title={() => '报告志愿活动记录'}
                  showSizeChanger={true}
                  defaultPageSize={5}
                  pageSize={5}
                />
              </div>
              <div className={styles.table}>
                <Table
                  columns={bankAccount_columns}
                  dataSource={bankAccount_data}
                  bordered
                  title={() => '报告银行卡消费记录'}
                  showSizeChanger={true}
                  defaultPageSize={5}
                  pageSize={5}
                />
              </div>
            </div>
            :
            <span className={styles.label}>请先前往信息验证页面完成所有验证！</span>
        }
      </div>
    );
  }
}

function mapStateToProps({ CreditReport }) {
  return {
    CreditReport,
  };
}

export default connect(mapStateToProps)(CreaditReportPage);

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

const getBasicInfoDataByReport = (CreditReport) => {

  if(CreditReport && CreditReport[0] && CreditReport[0][0]){
    return [{
      key: 1,
      name: CreditReport[0][0]['name'],
      IDCard: CreditReport[0][0]['IDCard'],
      home: CreditReport[0][0]['home'],
      ZhiMaCredit: CreditReport[0][0]['ZhiMaCredit'],
      father_occupation: CreditReport[0][0]['father_occupation'],
      father_revenue: CreditReport[0][0]['father_revenue'],
      mother_occupation: CreditReport[0][0]['mother_occupation'],
      mother_revenue: CreditReport[0][0]['mother_revenue'],
    }];
  }
  else {
    return [{
      key: undefined,
      name: undefined,
      IDCard: undefined,
      home: undefined,
      ZhiMaCredit: undefined,
      father_occupation: undefined,
      father_revenue: undefined,
      mother_occupation: undefined,
      mother_revenue: undefined,
    }];
  }

}


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

const getEduInfoDataByReport = (CreditReport) => {

  if(CreditReport && CreditReport[1] &&CreditReport[1][0]){
    return [{
      key: '1',
      university: CreditReport[1][0]['university'],
      major: CreditReport[1][0]['major'],
      grade: CreditReport[1][0]['grade'],
      schoolNum: CreditReport[1][0]['schoolNum'],
      gpa: CreditReport[1][0]['gpa'],
    }];
  }
  else {
    return [{
      key: '1',
      university: undefined,
      major: undefined,
      grade: undefined,
      schoolNum: undefined,
      gpa: undefined,
    }];
  }

}


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

const getBankAccountDataByCreditReport = (CreditReport) => {

  if(CreditReport && CreditReport[2]){

    const bankAccount_data = [];
    for (let i = 0; i < CreditReport[2].length; i++) {
      bankAccount_data.push({
        key: i,
        number: i,
        date: CreditReport[2][i]['date'],
        type: CreditReport[2][i]['name'],
        cost: CreditReport[2][i]['cost'],
      })
    }

    return bankAccount_data;

  }
  else {
    return [{
      key: 1,
      number: 1,
      date:undefined,
      type:undefined,
      cost:undefined,
    }];
  }

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


const getScholarshipDataByCreditReport = (CreditReport) => {

  //服务器好像没返回这个... - -

  const scholarship_data = [];
  for (let i = 0; i < 1; i++) {
    scholarship_data.push({
      key: i,
      date: '2016-07-18',
      name: '人民奖学金二等奖',
      cost: '￥2000.0',
    })
  }

  return scholarship_data;

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

const getVolunteerDataByCreditReport = (CreditReport) => {

  if(CreditReport && CreditReport[3]){

    const volunteer_data = [];
    for (let i = 0; i < CreditReport[3].length; i++) {
      volunteer_data.push({
        key: i,
        date: CreditReport[3][i]['date'],
        name: CreditReport[3][i]['name'],
        period: CreditReport[3][i]['period'],
      })
    }

    return volunteer_data;

  }
  else {
    return [{
      key: 1,
      date:undefined,
      type:undefined,
      cost:undefined,
    }];
  }

}

const getMainContent = (loginUser, CreditReport ) => {

  return (

    CreditReport.hasAllAuth ?
      <div>
        <div className={styles.table}>
          <Table
            columns={basicData_columns}
            dataSource={getBasicInfoDataByReport(CreditReport.data)}
            bordered
            title={() => '报告基本信息'}
            pagination={false}
          />
        </div>
        <div className={styles.table}>
          <Table
            columns={eduInfo_columns}
            dataSource={getEduInfoDataByReport(CreditReport.data)}
            bordered
            title={() => '报告学校信息'}
            pagination={false}
          />
        </div>
        <div className={styles.table}>
          <Table
            columns={scholarship_columns}
            dataSource={getScholarshipDataByCreditReport(CreditReport.data)}
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
            dataSource={getVolunteerDataByCreditReport(CreditReport.data)}
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
            dataSource={getBankAccountDataByCreditReport(CreditReport.data)}
            bordered
            title={() => '报告银行卡消费记录'}
            showSizeChanger={true}
            defaultPageSize={5}
            pageSize={5}
          />
        </div>
      </div>
      :
      <span className={styles.label2}>请先前往信息验证页面完成所有验证！</span>

  );


}

class CreaditReportPage extends React.Component {




  render() {
    return (
      <div>
        <PageHeader headerName="数据记录"/>
        {
         this.props.loginUser.userPhone ?
           getMainContent(this.props.loginUser, this.props.CreditReport)
           :
           <span className={styles.label2}>请先登录！</span>
        }
      </div>
    );
  }
}

function mapStateToProps({ CreditReport, loginUser }) {
  return {
    CreditReport,
    loginUser,
  };
}

export default connect(mapStateToProps)(CreaditReportPage);

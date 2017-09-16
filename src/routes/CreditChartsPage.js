/**
 * Created by hyx on 2017/9/12.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import PageHeader from '../components/PageHeader.js';
import AnimatedNumber from 'react-animated-number';
import styles from './CreditChartsPage.css';
import {connect} from 'dva'


const option = {
  backgroundColor: "#ffffff",
  color: ['#2EC7C9'],

  tooltip: {
    formatter: "{b} : {c}次"
  },
  legend: {
    left: '9%',
    data: ['大学生消费区间']
  },
  grid: {
    left: '6%',
    right: '35%',
    top: '16%',
    bottom: '6%',
    containLabel: true
  },
  toolbox: {
    "show": false,
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    "axisLine": {
      lineStyle: {
        color: '#c0576d'
      }
    },
    axisTick: {
      alignWithLabel: true,
      interval: 0  // 设置成0强制显示所有标签
    },
    axisLabel: {
      textStyle: {
        color: '#000000',
        interval: 0  // 设置成0强制显示所有标签
      },
    },
    boundaryGap: true, //false时X轴从0开始
    data: ['0~200元', '200~400元', '400~600元', '600~800元', '800~1000元', '1000元以上']
  },
  yAxis: {
    "axisLine": {
      lineStyle: {
        color: '#c0576d'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#c0576d'
      }
    },
    axisTick: {
      alignWithLabel: true
    },
    axisLabel: {
      textStyle: {
        color: '#000000'
      },
      formatter: '{value}次'
    },
    type: 'value'
  },
  series: [{
    name: '大学生消费区间',
    smooth: true,
    type: 'bar',
    symbolSize: 8,
    //symbol: 'circle',
    data: [0, 0, 0, 0, 0, 0]
  }, {
    type: 'pie',
    center: ['83%', '50%'],
    radius: ['15%', '20%'],
    name: '饼图',
    tooltip: {
      trigger: 'item',
      formatter: "{b} : {c}次 ({d}%)"
    },
    data: [{
      value: 0,
      name: '0~200元',
      itemStyle: {
        normal: {
          color: '#eedd78'
        }
      }
    }, {
      value: 0,
      name: '200~400元',
      itemStyle: {
        normal: {
          color: '#dd6b66'
        }
      }
    }, {
      value: 0,
      name: '400~600元',
      itemStyle: {
        normal: {
          color: '#73b9bc'
        }
      }
    }, {
      value: 0,
      name: '600~800元',
      itemStyle: {
        normal: {
          color: '#e69d87'
        }
      }
    }, {
      value: 0,
      name: '800~1000元',
      itemStyle: {
        normal: {
          color: '#8dc1a9'
        }
      }
    }, {
      value: 0,
      name: '1000元以上',
      itemStyle: {
        normal: {
          color: '#c0576d'
        }
      }
    }]
  }]
};

class CreditChartsPage extends React.Component {

  // foo = () => {
  //   // 基于准备好的dom，初始化echarts实例
  //   var myChart = echarts.init(document.getElementById('cost_chart'));
  //   // 绘制图表
  //   myChart.setOption(option);
  // }

  render() {
    return (
      <div>
        <PageHeader headerName="数据分析"/>
        <div className={styles.hint}>
          <span className={styles.label}>预测借款违约概率:</span>
          <AnimatedNumber
            component="text"
            value={this.props.CreditReport.data && this.props.CreditReport.data[4]? this.props.CreditReport.data[4] : 0}
            initialValue={0}
            style={{
              transition: '0.8s ease-out',
              fontSize: 48,
              transitionProperty: 'background-color, color, opacity'
            }}
            frameStyle={perc => (
              perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
            )}
            duration={1000}
            formatValue={n => n + "%"}
            stepPrecision={0.01}
          />
        </div>

        <div>
          <div className={styles.hint2}>
            <span className={styles.label}>日常消费水平统计:</span>
          </div>
          <ReactEcharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            theme={"theme_name"}
          />
        </div>
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

export default connect(mapStateToProps)(CreditChartsPage);

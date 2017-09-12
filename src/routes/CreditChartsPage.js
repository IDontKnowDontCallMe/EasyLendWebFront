/**
 * Created by hyx on 2017/9/12.
 */
import React from 'react';
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import PageHeader from '../components/PageHeader.js';

const option = {
  backgroundColor: "#ffffff",
  color: ['#2EC7C9'],

  title: [{
    text: '组合图',
    left: '40%',
    top: '6%',
    textStyle: {
      color: '#000000'
    }
  }],
  tooltip: {},
  legend: {
    x: '30%',
    bottom: '1%',
    data: ['郑州']
  },
  grid: {
    left: '10%',
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
    "axisTick": {
      "show": false
    },
    axisLabel: {
      textStyle: {
        color: '#000000'
      }
    },
    boundaryGap: true, //false时X轴从0开始
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
    "axisTick": {
      "show": false
    },
    axisLabel: {
      textStyle: {
        color: '#000000'
      }
    },
    type: 'value'
  },
  series: [{
    name: '郑州',
    smooth: true,
    type: 'bar',
    symbolSize: 8,
    //symbol: 'circle',
    data: [90, 50, 39, 50, 120, 82, 80]
  }, {
    type: 'pie',
    center: ['83%', '50%'],
    radius: ['15%', '20%'],
    name: '饼图',
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    data: [{
      value: 335,
      name: '直接访问',
      itemStyle: {
        normal: {
          color: '#eedd78'
        }
      }
    }, {
      value: 310,
      name: '邮件营销',
      itemStyle: {
        normal: {
          color: '#dd6b66'
        }
      }
    }, {
      value: 234,
      name: '联盟广告',
      itemStyle: {
        normal: {
          color: '#73b9bc'
        }
      }
    }, {
      value: 135,
      name: '视频广告',
      itemStyle: {
        normal: {
          color: '#e69d87'
        }
      }
    }, {
      value: 1548,
      name: '搜索引擎',
      itemStyle: {
        normal: {
          color: '#8dc1a9'
        }
      }
    }]
  }]
};

class CreditChartsPage extends React.Component {

  foo = () => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('cost_chart'));

    // 绘制图表
    myChart.setOption(option);
  }

  render() {

    return (
      <div>
        <PageHeader headerName="数据分析"/>
        <ReactEcharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
           />
      </div>
    );
  }
}

export default CreditChartsPage;

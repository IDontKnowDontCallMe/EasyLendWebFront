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

  tooltip: {
    formatter: "{b} : {c}次"
  },
  legend: {
    left: '13%',
    data: ['大学生消费区间']
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
    axisTick: {
      alignWithLabel: true,
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
    data: [4, 3, 2, 1, 2, 1]
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
      value: 4,
      name: '0~200元',
      itemStyle: {
        normal: {
          color: '#eedd78'
        }
      }
    }, {
      value: 3,
      name: '200~400元',
      itemStyle: {
        normal: {
          color: '#dd6b66'
        }
      }
    }, {
      value: 4,
      name: '400~600元',
      itemStyle: {
        normal: {
          color: '#73b9bc'
        }
      }
    }, {
      value: 1,
      name: '600~800元',
      itemStyle: {
        normal: {
          color: '#e69d87'
        }
      }
    }, {
      value: 2,
      name: '800~1000元',
      itemStyle: {
        normal: {
          color: '#8dc1a9'
        }
      }
    }, {
      value: 1,
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

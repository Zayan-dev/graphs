import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

const Barchart = (props) => {
  useEffect(() => {
    // console.log(props.array)
    const chartDom = document.getElementById('bar');
    const myChart = echarts.init(chartDom);
    const option = {
      legend: {},
      title: { text: 'Application Criticality' },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: [
        {
          name: 'Application Component',
          nameTextStyle: { padding: 10, fontSize: 20 },
          nameLocation: 'middle',
          type: 'category',
          data: props.array
        }
      ],
      yAxis: [
        {
          name: 'Criticality',
          type: 'category',
          nameLocation: 'middle',
          nameTextStyle: { padding: 60, fontSize: 20 },
          data: ['Initial point','very low', 'low', 'medium', 'high', 'very high']
        }
      ],
      series: [
        {
          name: 'Criticality',
          type: 'bar',
          barWidth: '40%',
          data: props.componentCriticalities
        }
      ]
    };

    myChart.setOption(option);

    // Clean up when component unmounts
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div id="bar" style={{ width: '100%', height: '550px' }}></div>
  )
};

export default Barchart;

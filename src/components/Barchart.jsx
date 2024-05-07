import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Barchart = () => {
  useEffect(() => {
    // Initialize chart when component mounts
    const chartDom = document.getElementById('bar');
    const myChart = echarts.init(chartDom);

    const option = {
      // legend: {},
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
          data: ['Comp 001', 'Comp 002', 'Comp 003', 'Comp 004', 'Comp 005']
        }
      ],
      yAxis: [
        {
          name: 'Criticality',
          type: 'category',
          nameLocation: 'middle',
          nameTextStyle: { padding: 60, fontSize: 20 },
          data: ['initial point', 'verylow', 'low', 'medium', 'high', 'very high']
        }
      ],
      series: [
        {
          name: 'Criticality',
          type: 'bar',
          barWidth: '40%',
          data: ['low', 'verylow', 'high', 'medium', 'very high']
        }
      ]
    };

    myChart.setOption(option);

    // Clean up when component unmounts
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <div id="bar" style={{ width: '100%', height: '550px' }}></div>;
};

export default Barchart;

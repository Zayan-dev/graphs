import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Sample6 = () => {
  useEffect(() => {
    // Initialize chart when component mounts
    const chartDom = document.getElementById('sample-6');
    const myChart = echarts.init(chartDom);

    const option = {
      title: { text: 'Budget Utilization', right: '50%' },
      legend: { bottom: 0 },
      tooltip: {},
      dataset: {
        source: [
          ['Budget', 'Attribute / Utilized budget', 'Attribute / Allocated budget'],
          ['Comp 001', 0.45, 0.45],
          ['Comp 002', 0.2, 0.25],
          ['Comp 003', 1.6, 1.78],
          ['Comp 004', 0.3, 0.3],
          ['Comp 005', 0.9, 1],
          ['Comp 006', 0.3, 0.2]
        ]
      },
      xAxis: [
        {
          type: 'category',
          nameTextStyle: { padding: 10, fontSize: 20 },
          nameLocation: 'middle'
        }
      ],
      yAxis: [
        {
          gridIndex: 0,
          name: 'Millions',
          nameTextStyle: { padding: 20, fontSize: 20 },
          nameLocation: 'middle'
        }
      ],
      series: [
        { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 },
        { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 }
      ]
    };

    myChart.setOption(option);

    // Clean up when component unmounts
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <div id="sample-6" style={{ width: '100%', height: '500px' }}></div>;
};

export default Sample6;

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Sample4 = () => {
  useEffect(() => {
    // Initialize chart when component mounts
    const chartDom = document.getElementById('sample-4');
    const myChart = echarts.init(chartDom);

    const option = {
      title: { text: 'Application Maturity' },
      legend: { bottom: 0 },
      tooltip: {},
      dataset: {
        source: [
          [
            'criticality',
            'optimized',
            'managed',
            'functional',
            'challenged',
            'initial',
            'none'
          ],
          ['Comp 001', 0, 0, 0, 2, 0, 0],
          ['Comp 002', 0, 4, 0, 0, 0, 0],
          ['Comp 003', 0, 0, 3, 0, 0, 0],
          ['Comp 004', 0, 0, 0, 0, 2.5, 0],
          ['Comp 005', 5, 0, 0, 0, 0, 0],
          ['Comp 006', 0, 0, 0, 2, 0, 0],
          ['Comp 007', 0, 0, 3.2, 0, 0, 0],
          ['Comp 008', 0, 0, 0, 2.5, 0, 0],
          ['Comp 009', 0, 0, 0, 2, 0, 0],
          ['Comp 010', 0, 3, 0, 0, 0, 0],
          ['Comp 011', 0, 0, 0, 0, 0, 4],
          ['Comp 012', 4.5, 0, 0, 0, 0, 0]
        ]
      },
      xAxis: [
        {
          type: 'category',
          name: 'Application Characteristics',
          nameTextStyle: { padding: 10, fontSize: 20 },
          nameLocation: 'middle'
        }
      ],
      yAxis: [
        {
          gridIndex: 0,
          name: 'Number of Applications',
          nameTextStyle: { padding: 20, fontSize: 20 },
          nameLocation: 'middle'
        }
      ],
      series: [
        { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 },
        { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 },
        { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 },
        { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 },
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

  return <div id="sample-4" style={{ width: '100%', height: '500px' }}></div>;
};

export default Sample4;

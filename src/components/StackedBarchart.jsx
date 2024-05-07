import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const StackedBarchart = () => {
  useEffect(() => {
    // Initialize chart when component mounts
    const chartDom = document.getElementById('stacked-bar');
    const myChart = echarts.init(chartDom);

    const option = {
      title: { text: 'Application Maturity' },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['criticality', 'very high', 'high', 'medium', 'low', 'very low'],
          ['Scalibility', 41.1, 30.4, 65.1, 53.3, 50.0],
          ['Availability', 86.5, 92.1, 85.7, 83.1, 60.0],
          ['Usaibility', 24.1, 67.2, 79.5, 86.4, 70.0],
          ['Modularity', 24.1, 67.2, 79.5, 86.4, 70.0],
          ['Continuity', 24.1, 67.2, 79.5, 86.4, 70.0],
          ['Composibility', 24.1, 67.2, 79.5, 86.4, 70.0]
        ]
      },
      xAxis: [
        {
          type: 'category',
          name: 'Application Characteristics',
          nameTextStyle: { padding: 20, fontSize: 20 },
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
        // These series are in the first grid.

        // These series are in the second grid.
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

  return <div id="stacked-bar" style={{ width: '100%', height: '500px' }}></div>;
};

export default StackedBarchart;

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Piechart = () => {
  useEffect(() => {
    // Initialize chart when component mounts
    const chartDom = document.getElementById('piechart');
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: 'Budget Distribution',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: 'bottom'
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: [
            { value: 14, name: 'Comp 001' },
            { value: 7, name: 'Comp 002' },
            { value: 46, name: 'Comp 003' },
            { value: 1, name: 'Comp 004' },
            { value: 28, name: 'Comp 005' },
            { value: 4, name: 'Comp 006' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    myChart.setOption(option);

    // Clean up when component unmounts
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return <div id="piechart" style={{ width: '100%', height: '500px' }}></div>;
};

export default Piechart;

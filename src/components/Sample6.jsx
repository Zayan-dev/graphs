// import React, { useEffect } from 'react';
// import * as echarts from 'echarts';

// const Sample6 = ({data}) => {
//   useEffect(() => {
//     // Initialize chart when component mounts
//     const chartDom = document.getElementById('sample-6');
//     const myChart = echarts.init(chartDom);

//     const option = {
//       title: { text: 'Budget Utilization', right: '50%' },
//       legend: { bottom: 0},
//       tooltip: {},
//       dataset: {
//         source: data
//       },
//       xAxis: [
//         {
//           type: 'category',
//           nameTextStyle: { padding: 10, fontSize: 20 },
//           nameLocation: 'middle'
//         }
//       ],
//       yAxis: [
//         {
//           gridIndex: 0,
//           name: 'Millions',
//           nameTextStyle: { padding: 20, fontSize: 20 },
//           nameLocation: 'middle'
//         }
//       ],
//       series: [
//         { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 },
//         { type: 'bar', xAxisIndex: 0, yAxisIndex: 0 }
//       ]
//     };

//     myChart.setOption(option);

//     // Clean up when component unmounts
//     return () => {
//       myChart.dispose();
//     };
//   }, [data]); // whenever data will change it will run

//   return <div id="sample-6" style={{ width: '100%', height: '500px' }}></div>;
// };

// export default Sample6;

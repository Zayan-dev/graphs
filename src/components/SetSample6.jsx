import React, { useState } from 'react';
import * as echarts from 'echarts';

const SetSample6 = ({ onSubmit }) => {
  const [data, setData] = useState([
    ['Budget', 'Attribute / Utilized budget', 'Attribute / Allocated budget'],
    ['', 0, 0]
  ]);

  const handleInputChange = (rowIndex, columnIndex, value) => {
    const newData = [...data];
    newData[rowIndex][columnIndex] = value;
    setData(newData);
  };

  const handleAddRow = () => {
    setData([...data, ['', 0, 0]]);
  };

  const handleDeleteRow = (rowIndex) => {
    const newData = [...data];
    newData.splice(rowIndex, 1);
    setData(newData);
  };

  const handleSubmit = () => {
    onSubmit(data);
  };

  return (
    <div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <div key={columnIndex}>
              <input
                type="text"
                value={cell}
                onChange={(e) => handleInputChange(rowIndex, columnIndex, e.target.value)}
              />
              {rowIndex !== 0 && columnIndex === 0 && (
                <button onClick={() => handleDeleteRow(rowIndex)}>Delete</button>
              )}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSubmit}>Generate Chart</button>
    </div>
  );
};

const Sample6 = () => {
  const generateChart = (data) => {
    // Initialize chart when data is submitted
    const chartDom = document.getElementById('sample-6');
    const myChart = echarts.init(chartDom);

    const option = {
      title: { text: 'Budget Utilization', right: '50%' },
      legend: { bottom: 0},
      tooltip: {},
      dataset: { source: data },
      xAxis: [
        { type: 'category', nameTextStyle: { padding: 10, fontSize: 20 }, nameLocation: 'middle' }
      ],
      yAxis: [
        { gridIndex: 0, name: 'Millions', nameTextStyle: { padding: 20, fontSize: 20 }, nameLocation: 'middle' }
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
  };

  return (
    <div>
      <SetSample6 onSubmit={generateChart} />
      <div id="sample-6" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default Sample6;

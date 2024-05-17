import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
// import './StackedBarchart.css'; // Import CSS for styling

const StackedBarchart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize chart when component mounts
    const chartDom = document.getElementById('stacked-bar');
    const myChart = echarts.init(chartDom);

    const option = {
      title: { text: 'Application Maturity' },
      legend: {},
      tooltip: {},
      dataset: {
        source: data
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
      series: Array.from({ length: data.length - 2 }, (_, i) => ({ type: 'bar', xAxisIndex: 0, yAxisIndex: 0 }))
    };

    myChart.setOption(option);

    // Clean up when component unmounts
    return () => {
      myChart.dispose();
    };
  }, [data]);

  const handleInputChange = (event, rowIndex, cellIndex) => {
    const newValue = event.target.value;
    const updatedData = data.map((row, i) =>
      i === rowIndex ? row.map((cell, j) => (j === cellIndex ? newValue : cell)) : row
    );
    setData(updatedData);
  };

  return (
    <div className="container">
      <button className="btn" onClick={() =>
          setData([
            ['criticality', 'very high', 'high', 'medium', 'low', 'very low'],
            ['Scalibility', 0, 0, 0, 0, 0],
            ['Availability', 0, 0, 0, 0, 0],
            ['Usability', 0, 0, 0, 0, 0],
            ['Modularity', 0, 0, 0, 0, 0],
            ['Continuity', 0, 0, 0, 0, 0],
            ['Composibility', 0, 0, 0, 0, 0]
          ])
        }>
        Load Default Data
      </button>
      <table className="table">
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <input
                    type="text"
                    value={cell}
                    onChange={event => handleInputChange(event, i, j)}
                    className="input"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div id="stacked-bar" className="chart"></div>
    </div>
  );
};

export default StackedBarchart;

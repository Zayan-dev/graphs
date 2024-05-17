import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

const Piechart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Initialize chart when component mounts or updates
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
          data: data,
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
  }, [data]); // Dependency array ensures this effect runs whenever 'data' changes

  const handleNameChange = (index, newName) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].name = newName;
      return newData;
    });
  };

  const handleValueChange = (index, newValue) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index].value = parseFloat(newValue);
      return newData;
    });
  };

  const handleAddComponent = () => {
    setData(prevData => [...prevData, { value: 0, name: `Comp ${prevData.length + 1}` }]);
  };

  const handleDeleteComponent = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <label>
            Component {index + 1} Name:
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />
          </label>
          <label>
            Value:
            <input
              type="number"
              value={item.value}
              onChange={(e) => handleValueChange(index, e.target.value)}
            />
          </label>
          <button onClick={() => handleDeleteComponent(index)}>Delete</button>
        </div>
      ))}
      <button onClick={handleAddComponent}>Add Component</button>
      <div id="piechart" style={{ width: '100%', height: '500px' }}></div>
    </div>
  );
};

export default Piechart;
  
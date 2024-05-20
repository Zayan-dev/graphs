import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60px;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Sample4 = () => {
  const categories = ['optimized', 'managed', 'functional', 'challenged', 'initial', 'none'];
  const [data, setData] = useState([
    ['criticality', ...categories]
  ]);

  useEffect(() => {
    const chartDom = document.getElementById('sample-4');
    const myChart = echarts.init(chartDom);

    const option = {
      title: { text: 'Application Maturity' },
      legend: { bottom: 0 },
      tooltip: {},
      dataset: {
        source: data
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
      series: new Array(data[0].length - 1).fill({ type: 'bar', xAxisIndex: 0, yAxisIndex: 0 })
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, [data]);

  const handleCategoryChange = (index, category, value) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index][category] = parseFloat(value) >= 0 ? parseFloat(value) : 0;
      return newData;
    });
  };

  const handleComponentNameChange = (index, value) => {
    setData(prevData => {
      const newData = [...prevData];
      newData[index][0] = value;
      return newData;
    });
  };

  const handleAddComponent = () => {
    setData(prevData => [
      ...prevData,
      ['Comp ' + String(prevData.length).padStart(3, '0'), 0, 0, 0, 0, 0, 0]
    ]);
  };

  const handleDeleteComponent = (index) => {
    setData(prevData => prevData.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Button onClick={handleAddComponent}>Add Component</Button>
      {data.slice(1).map((row, rowIndex) => (
        <Label key={rowIndex}>
          <Input
            type="text"
            value={row[0]}
            onChange={(e) => handleComponentNameChange(rowIndex + 1, e.target.value)}
          />
          {categories.map((category, colIndex) => (
            <React.Fragment key={colIndex}>
              <span>{category}</span>
              <Input
                type="number"
                value={row[colIndex + 1]}
                onChange={(e) => handleCategoryChange(rowIndex + 1, colIndex + 1, e.target.value)}
              />
            </React.Fragment>
          ))}
          <Button onClick={() => handleDeleteComponent(rowIndex + 1)}>Delete</Button>
        </Label>
      ))}
      <div id="sample-4" style={{ width: '100%', height: '500px' }}></div>
    </Container>
  );
};

export default Sample4;

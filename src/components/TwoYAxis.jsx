import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';

const CarComparisonChart = () => {
    const [chartData, setchartData] = useState([
        // { name: 'Car 1', Y1: 1, Y2: 1 },
        // { name: 'Car 2', Y1: 2, Y2: 2 },
        // { name: 'Car 3', Y1: 3, Y2: 3 },
        // Add more X Axis values as needed
    ]);

    useEffect(() => {
        const chartDom = document.getElementById('main');
        const myChart = echarts.init(chartDom);

        const option = {
            title: {
                text: 'Comparison',
                left: 'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Y-1', 'Y-2'],
                bottom: 'bottom'
            },
            xAxis: {
                type: 'category',
                data: chartData.map(item => item.name)
            },
            yAxis: [
                {
                    type: 'value',
                    name: 'Y-1',
                    position: 'left'
                },
                {
                    type: 'value',
                    name: 'Y-2',
                    position: 'right'
                }
            ],
            series: [
                {
                    name: 'Y-1',
                    type: 'bar',
                    data: chartData.map(item => item.Y1),
                    yAxisIndex: 0
                },
                {
                    name: 'Y-2',
                    type: 'bar',
                    data: chartData.map(item => item.Y2),
                    yAxisIndex: 1
                }
            ]
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [chartData]);

    const handleInputChange = (index, field, value) => {
        const updatedData = [...chartData];
        updatedData[index][field] = parseFloat(value);
        setchartData(updatedData);
    };

    const handleNameChange = (index, newName) => {
        const updatedData = [...chartData];
        updatedData[index].name = newName;
        setchartData(updatedData);
    };

    const handleAddComponent = () => {
        const newComp = {
            name: ``,
            Y1: Number,
            Y2: Number
        };
        setchartData([...chartData, newComp]);
    };

    return (
        <div>
            {chartData.map((item, index) => (
                <div key={index}>
                    <label>
                        Component Name:
                        <input
                         style={{padding:"5px",margin:"5px"}}
                            type="text"
                            placeholder='Component name'
                            value={item.name}
                            onChange={(e) => handleNameChange(index, e.target.value)}
                        />
                    </label>
                    <label>
                        Y-1:
                        <input
                         style={{padding:"5px",margin:"5px"}}
                            type="number"
                            placeholder='Number'
                            value={item.Y1}
                            onChange={(e) => handleInputChange(index, 'Y1', e.target.value)}
                        />
                    </label>
                    <label>
                        Y-2:
                        <input
                        style={{padding:"5px",margin:"5px"}}
                            type="number"
                            placeholder='Number'
                            value={item.Y2}
                            onChange={(e) => handleInputChange(index, 'Y2', e.target.value)}
                        />
                    </label>
                </div>
            ))}
            <button style={{ border: 'none', padding: '10px', borderRadius: '10px', cursor: 'pointer', margin: '10px' }} onClick={handleAddComponent}>Add Component</button>
            <div id="main" style={{ width: '100%', height: '500px' }}></div>
        </div>
    );
};

export default CarComparisonChart;

import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const SecondBarchart = () => {
    useEffect(() => {
        // Initialize chart when component mounts
        const chartDom = document.getElementById('second-bar');
        const myChart = echarts.init(chartDom);

        const option = {
            title: { text: 'Application Criticality' },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '4%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    name: 'Criticality',
                    nameTextStyle: { padding: 10, fontSize: 20 },
                    nameLocation: 'middle',
                    type: 'category',
                    data: ['very high', 'high', 'medium', 'low', 'very low']
                }
            ],
            yAxis: [
                {
                    name: 'Number of Applications',
                    nameLocation: 'middle',
                    nameTextStyle: { padding: 10, fontSize: 20 },
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Criticality',
                    type: 'bar',
                    barWidth: '40%',
                    data: [2, 1.1, 2.5, 4.2, 1.5]
                }
            ]
        };

        myChart.setOption(option);

        // Clean up when component unmounts
        return () => {
            myChart.dispose();
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return <div id="second-bar" style={{ width: '100%', height: '500px' }}></div>;
};

export default SecondBarchart;

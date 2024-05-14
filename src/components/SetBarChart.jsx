import React, { useState } from 'react';
import Barchart from './Barchart';

const SetBarChart = () => {
    const criticalityArray = ["low", "very low", "medium", "high", "very high"];
    const [compCount, setCompCount] = useState(0);
    const [arr, setArr] = useState([]);
    const [componentCriticalities, setComponentCriticalities] = useState([]);
    const [showChart, setShowChart] = useState(false);

    const handleCount = (e) => {
        e.preventDefault();
        setCompCount(Number(e.target.value));
    }

    const handleChart = () => {
        let str = "Comp-";
        const newArray = [];
        for (let i = 0; i < compCount; i++) {
            newArray.push(`${str}${i + 1}`);
        }
        setArr(newArray);
        // Initialize component criticalities with default values
        setComponentCriticalities(newArray.map(() => ""));
        setShowChart(false); // Reset to hide the chart when the components change
    }

    const handleCriticalityChange = (index, e) => {
        const updatedCriticalities = [...componentCriticalities];
        updatedCriticalities[index] = e.target.value;
        setComponentCriticalities(updatedCriticalities);
    }

    const handleGenerateChart = () => {
        setShowChart(true);
    }

    return (
        <div>
            <p>Enter Total No of Components</p>
            <input type='number' placeholder='Enter No of Components' value={compCount} onChange={handleCount} style={{ padding: '10px' }} />
            <button id='ok-btn' onClick={handleChart}><i className="fa-regular fa-circle-check fa-2xl"></i></button>
            {arr.map((ele, index) => (
                <div key={index}>
                    <span>{ele}: </span>
                    <select value={componentCriticalities[index]} onChange={(e) => handleCriticalityChange(index, e)}>
                        <option value="">Select Criticality</option>
                        {criticalityArray.map((criticality, idx) => (
                            <option key={idx} value={criticality}>{criticality}</option>
                        ))}
                    </select>
                </div>
            ))}
            {arr.length > 0 && (
                <button id='generatebarchart' onClick={handleGenerateChart}>Generate Chart</button>
            )}
            {showChart && <Barchart array={arr} componentCriticalities={componentCriticalities} />}
        </div>
    );
}

export default SetBarChart;

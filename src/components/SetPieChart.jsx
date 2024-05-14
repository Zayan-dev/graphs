import React, { useState } from 'react'

const SetPieChart = () => {
    const [compCount, setCompCount] = useState(0);
    const [array, setArray] = useState([]);

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
        setArray(newArray);
        console.log(array);
        // setArr(newArray);
        // Initialize component criticalities with default values
        // setComponentCriticalities(newArray.map(() => ""));
        // setShowChart(false); // Reset to hide the chart when the components change
    }
    return (
        <div> <p>Enter Total No of Components</p>
            <input type='number' placeholder='Enter No of Components' value={compCount} onChange={handleCount} style={{ padding: '10px' }} />
            <button id='ok-btn' onClick={handleChart}><i className="fa-regular fa-circle-check fa-2xl"></i></button>
            {arr}
        </div>
    )
}

export default SetPieChart
import React from 'react';
import { Link } from "react-router-dom";

const Mainmenu = () => {
    return (
        <div id='main-menu'>
            <div id='title'>
                Generate Charts
            </div>
            <Link id='mainmenu-btn' to="/setbarchart">Sales Bar Chart</Link>
            <Link id='mainmenu-btn' to="/setsample6">Budget Tracker</Link>
            <Link id='mainmenu-btn' to="/piechart">Expenditure Pie Chart</Link>
            <Link id='mainmenu-btn' to="/sample4">Series Layout Chart</Link>
            <Link id='mainmenu-btn' to="/stackedbar">Stacked Bar Chart</Link>
            <Link id='mainmenu-btn' to="/treemap">Hierarchical Tree Map</Link>
            {/* <Link id='mainmenu-btn' to="/twoyaxis">Dual Y-Axis Comparison</Link> */}
        </div>
    );
}

export default Mainmenu;

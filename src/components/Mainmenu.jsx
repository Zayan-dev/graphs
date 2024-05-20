import React from 'react'
import {
    Link
} from "react-router-dom";
const Mainmenu = () => {
    return (
        <Link to="/" id='main-menu'>
            <div id='title'>
                Generate Charts
            </div>
            <Link id='mainmenu-btn' to="/setbarchart" >Bar Chart</Link>
            <Link id='mainmenu-btn' to="/setsample6">Budget Tracking</Link>
            <Link id='mainmenu-btn' to="/piechart">Pie Chart</Link>
            <Link id='mainmenu-btn' to="/sample4">Series Layout Chart</Link>
            <Link id='mainmenu-btn' to="/stackedbar">StackedBar Chart</Link>
            <Link id='mainmenu-btn' to="/treemap">Tree Map Chart</Link>
        </Link>
    )
}

export default Mainmenu
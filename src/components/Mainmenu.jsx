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
            <Link id='mainmenu-btn' to="/setpiechart">Pie Chart</Link>
        </Link>
    )
}

export default Mainmenu
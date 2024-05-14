import Mainmenu from "./components/Mainmenu"
import SetBarChart from "./components/SetBarChart"
import Piechart from "./components/Piechart";
import SetSample6 from "./components/SetSample6";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SetPieChart from "./components/SetPieChart";
function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mainmenu key="/"></Mainmenu>}></Route>
        <Route exact path="/setbarchart" element={<SetBarChart key="/setbarchart" category="setbarchart"></SetBarChart>}></Route>
        <Route exact path="/setsample6" element={<SetSample6 key="/setsample6" category="setsample6"></SetSample6>}></Route>
        <Route exact path="/setpiechart" element={<SetPieChart key="/setpiechart" category="setpiechart"></SetPieChart>}></Route>


        {/* <Route exact path="/generatebarchart" element={<Barchart key="/generatebarchart" category="generatebarchart"></Barchart>}></Route> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App

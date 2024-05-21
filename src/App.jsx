import Mainmenu from "./components/Mainmenu"
import SetBarChart from "./components/SetBarChart"
import Piechart from "./components/Piechart";
import SetSample6 from "./components/SetSample6";
import StackedBarchart from "./components/StackedBarchart";
import Sample4 from "./components/Sample4";
import TreeMapChart from "./components/TreeMapChart";
import TwoYAxis from "./components/TwoYAxis";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Mainmenu key="/"></Mainmenu>}></Route>
        <Route exact path="/setbarchart" element={<SetBarChart key="/setbarchart" category="setbarchart"></SetBarChart>}></Route>
        <Route exact path="/setsample6" element={<SetSample6 key="/setsample6" category="setsample6"></SetSample6>}></Route>
        <Route exact path="/piechart" element={<Piechart key="/piechart" category="piechart"></Piechart>}></Route>
        <Route exact path="/sample4" element={<Sample4 key="/sample4" category="sample4"></Sample4>}></Route>
        <Route exact path="/stackedbar" element={<StackedBarchart key="/stackedbar" category="stackedbar"></StackedBarchart>}></Route>
        <Route exact path="/treemap" element={<TreeMapChart key="/treemap" category="treemap"></TreeMapChart>}></Route>
        <Route exact path="/twoyaxis" element={<TwoYAxis key="/twoyaxis" category="twoyaxis"></TwoYAxis>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

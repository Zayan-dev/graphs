import Barchart from "./components/Barchart"
import Piechart from "./components/Piechart"
import Sample4 from "./components/Sample4"
import SecondBarchart from "./components/SecondBarchart"
import StackedBarchart from "./components/StackedBarchart"
import Sample6 from "./components/Sample6"

function App() {

  return (
    <>
    <SecondBarchart></SecondBarchart>
    <br></br>
    <hr></hr>
    <br></br>
    <Barchart></Barchart>
    <br></br>
    <hr></hr>
    <br></br>
    <StackedBarchart></StackedBarchart>
    <br></br>
    <hr></hr>
    <br></br>
    <Sample4></Sample4>
    <br></br>
    <hr></hr>
    <br></br>
    <Piechart></Piechart>
    <br></br>
    <hr></hr>
    <br></br>
    <Sample6></Sample6>
    <br></br>
    <hr></hr>
    <br></br>
    </>
  )
}

export default App

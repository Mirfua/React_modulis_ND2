import Balloon from "./Components/Balloon";

let balloons = new Array(10).fill();

function App() {
  return (
    <>
      {balloons.map((x, i) => <Balloon key={i} text = {i + 1} />)}
    </>
  );
}

export default App;
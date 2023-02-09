import { useEffect, useState } from "react";
import "./App.css";
import Bar from "./components/Bar/Bar";
import Main from "./components/Main/Main";
import First from "./pages/first/First";

import "../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, VerticalBarSeries, MarkSeries } from "react-vis";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
    { x: 11, y: 5 },
    { x: 12, y: 4 },
    { x: 13, y: 9 },
    { x: 14, y: 1 },
    { x: 15, y: 7 },
    { x: 16, y: 6 },
    { x: 17, y: 3 },
    { x: 18, y: 2 },
    { x: 19, y: 0 },
  ];
  return (
    <div className="App">
      <First />
    </div>

    // <div className="App">
    //   <XYPlot height={200} width={200}>
    //     <VerticalBarSeries data={data} />
    //   </XYPlot>
    // </div>
  );
}

export default App;

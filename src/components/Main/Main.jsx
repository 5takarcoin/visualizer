import React, { useContext, useState } from "react";
import { ArrayContext } from "../../context/Context";
import Bar from "../Bar/Bar";
import "./Main.css";
import { motion } from "framer-motion";
import { bubble } from "./Bubble";

import "../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, VerticalBarSeries, MarkSeries } from "react-vis";
import Input from "../Input/Input";
import FlipMove from "react-flip-move";

const Main = () => {
  const { arr, setArr, processing, setProcessing, setProcessing2 } =
    useContext(ArrayContext);

  const data = arr.map((e, i) => ({ x: i, y: e }));

  const handleClick = () => {
    bubble(arr, setArr, setProcessing, setProcessing2);
  };

  return (
    <>
      <motion.div layout className="main">
        <FlipMove className="flip">
          {arr.map((elem, i) => (
            <Bar key={i} number={elem} i={i} />
          ))}
        </FlipMove>
      </motion.div>
      {/* <XYPlot height={500} width={600}>
        <VerticalBarSeries data={data} />
      </XYPlot> */}
      {processing === -1 && (
        <div className="buttons">
          <button onClick={handleClick}>Sort</button>
        </div>
      )}
    </>
  );
};

export default Main;

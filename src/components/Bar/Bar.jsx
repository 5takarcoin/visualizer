import { motion } from "framer-motion";
import React, { useContext, useEffect, useState, forwardRef } from "react";
import { ArrayContext } from "../../context/Context";
import "./Bar.css";

const Bar = forwardRef(({ number, i }, ref) => {
  const { arr, processing, processing2 } = useContext(ArrayContext);
  //const number = arr[i];
  const h = `${(70 / Math.max(...arr)) * number}vh`;
  const list = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 0.5, height: h },
  };

  return (
    <div
      ref={ref}
      className={`bar ${processing === i && "pro"} ${
        processing2 === i && "proside"
      }`}
    >
      <motion.div
        // variants={list}
        // initial="hidden"
        // animate="show"
        // className="bar"
        style={{ height: h }}
      ></motion.div>
    </div>
  );
});

export default Bar;

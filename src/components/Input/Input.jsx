import React, { useContext, useState } from "react";
import { ArrayContext } from "../../context/Context";
import "./Input.css";

const Input = () => {
  const { arr, setArr } = useContext(ArrayContext);
  const [manual, setManual] = useState(false);

  const generateArr = () => {
    const len = 40;
    const range = [1, 20];
    const newArr = [];
    for (let i = 0; i < len; i++) {
      const element = Math.floor(
        Math.random() * (range[1] - range[0]) + range[0]
      );
      newArr.push(element);
      setArr(newArr);
    }
  };

  const handleChange = (e) => {
    const str = e.target.value;
    const check = str
      .replace(/\D+/g, " ")
      .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
      .split(" ")
      .map((e) => Number(e));
    if (check.length === 1 && check[0] === "") setArr([]);
    else setArr(check);
  };
  return (
    <>
      <button className="change" onClick={() => setManual(!manual)}>
        {manual ? "Generate" : "Input"}
      </button>
      <div className="input">
        {manual ? (
          <input
            type="text"
            placeholder="Input a list of numbers"
            className="inputField"
            onChange={(e) => handleChange(e)}
          />
        ) : (
          <div className="generate">
            <button onClick={generateArr}>Generate</button>
            <div className="custom">
              <input type="number" placeholder="high" />
              <input type="number" placeholder="low" />
              <input type="number" placeholder="len" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Input;

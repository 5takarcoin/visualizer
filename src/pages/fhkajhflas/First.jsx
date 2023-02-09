import React, { useContext } from "react";
import Input from "../../components/Input/Input";
import Main from "../../components/Main/Main";
import { ArrayContext } from "../../context/Context";
import "./First.css";

const First = () => {
  const { processing } = useContext(ArrayContext);
  console.log(processing + "From first");
  return (
    <div className="first">
      <Main />
      {processing === -1 && <Input />}
    </div>
  );
};

export default First;

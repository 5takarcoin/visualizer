import { createContext, useState } from "react";

export const ArrayContext = createContext();

export const ArrayContextProvider = ({ children }) => {
  const [arr, setArr] = useState([]);
  const [processing, setProcessing] = useState(-1);
  const [processing2, setProcessing2] = useState(-1);
  return (
    <ArrayContext.Provider
      value={{
        arr,
        setArr,
        processing,
        setProcessing,
        processing2,
        setProcessing2,
      }}
    >
      {children}
    </ArrayContext.Provider>
  );
};

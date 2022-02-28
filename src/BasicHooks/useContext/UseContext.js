import React, { createContext, useState } from "react";
import BackButton from "../../Utilities/BackButton";
import Child from "./Child";
import OtherChild from "./OtherChild";

export const GlobalInfo = createContext();

function Usecontext() {
  const [color, setColor] = useState("green");
  const [day, setDay] = useState("Monday");
  const getDay = (item) => {
    setDay(item);
  };
  return (
    <GlobalInfo.Provider value={{ appColor: color, getDay: getDay }}>
      <div className="usecontext">
        <h1>Parent {day}</h1>
        <Child />
        <OtherChild />
        <BackButton />
      </div>
    </GlobalInfo.Provider>
  );
}

export default Usecontext;

//further extension for globalinfo

import React, { useContext } from "react";
import { GlobalInfo } from "./UseContext";

function GrandChild() {
  const { appColor, getDay } = useContext(GlobalInfo);
  const day = "sunday";
  return (
    <div className="grandchild">
      <h1 style={{ color: appColor }}>Helloi</h1>
      <button onClick={() => getDay(day)}>Click</button>
    </div>
  );
}

export default GrandChild;

import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import { GlobalInfo } from "./UseContext";

function Child() {
  const { appColor } = useContext(GlobalInfo);

  return (
    <div className="child">
      <h1 style={{ color: appColor }}>Child</h1>
      <GrandChild />
    </div>
  );
}

export default Child;

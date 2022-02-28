import React, { useContext } from "react";
import { GlobalInfo } from "./UseContext";
function OtherChild() {
  const { appColor } = useContext(GlobalInfo);

  return (
    <div className="otherchild">
      <h1 style={{ color: appColor }}>OtherChild</h1>
    </div>
  );
}

export default OtherChild;

import React from "react";
import BackButton from "../Utilities/BackButton";

import { useEmployeeCountHooks, useCustomTimeHooks } from "./DefinedHooks";

function CutomHooks() {
  const [time] = useCustomTimeHooks();
  const [empCount] = useEmployeeCountHooks();

  return (
    <div className="customhooks">
      <h1>hello customhooks</h1>
      <h1>Current Time: {time}</h1>
      <h1>Employee Count: {empCount}</h1>
      <BackButton />
    </div>
  );
}

export default CutomHooks;

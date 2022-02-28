import React, { useRef } from "react";
import BackButton from "../../Utilities/BackButton";

import Counter from "./Counter";

function UseImperativeHandle() {
  const ref = useRef();
  return (
    <div class="app">
      <Counter ref={ref} />
      <button onClick={() => ref.current.increment()}>AnotherClick</button>
      <BackButton />
    </div>
  );
}

export default UseImperativeHandle;

import React, { useEffect, useLayoutEffect, useState } from "react";
import BackButton from "../Utilities/BackButton";

function UseLayoutEffect() {
  const [number, setNumber] = useState(0);
  useLayoutEffect(() => {
    //put useEffect to see the changes
    setNumber(5);
    return () => {
      console.log("hey i am layout");
    };
  }, [number]);
  useEffect(() => {
    //put useEffect to see the changes
    setNumber(5);
    return () => {
      console.log("hey i am effect");
    };
  });

  function handleChange() {
    setNumber(1000000);
  }

  console.log("he i am console");

  return (
    <div className="app">
      <h1>Hello useLayoutEffect</h1>
      <button onClick={handleChange}>Click ME</button>
      {number}
      <BackButton />
    </div>
  );
}

export default UseLayoutEffect;

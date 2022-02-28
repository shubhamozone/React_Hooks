import React, { useState, useMemo } from "react";
import BackButton from "../Utilities/BackButton";

function UseMemo() {
  const [number, setNumber] = useState(0);

  const [counter, setCounter] = useState(0);

  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const counterHander = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="memoization">
      <h1>Memoization</h1>
      <input onChange={onChangeHandler} />

      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
      <BackButton />
    </div>
  );
}

// function to square the value
function squareNum(number) {
  console.log("number passed is " + number);
  return Math.pow(number, 2);
}

export default UseMemo;

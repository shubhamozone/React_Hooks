import React, { useState, forwardRef, useImperativeHandle } from "react";

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    increment,
  }));
  const increment = () => setCount(count + 1);
  return (
    <div className="counter">
      <button onClick={increment}>Click</button>
      <h2>count: {count}</h2>
    </div>
  );
});

export default Counter;

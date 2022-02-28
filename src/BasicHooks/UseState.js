import React, { useState } from "react";
import BackButton from "../Utilities/BackButton";

function UseState() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Hello I am useState</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <BackButton />
    </div>
  );
}

export default UseState;

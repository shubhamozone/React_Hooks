import { useState, useEffect, useRef } from "react";
import BackButton from "../Utilities/BackButton";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0); //useref is defined here

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <BackButton />
    </>
  );
}

export default UseRef;

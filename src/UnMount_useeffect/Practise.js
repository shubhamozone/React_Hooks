import React, { useEffect, useState } from "react";
import BackButton from "../Utilities/BackButton";
import Hello from "./Hello";

function Practise() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    return () => {
      console.log("Hey i am father of Hello bye bye");
    };
  }, []);

  function handleChange() {
    setFlag(!flag);
    console.log(flag);
  }

  return (
    <div>
      <button label="Click me" onClick={handleChange}>
        CLick ME
      </button>
      {flag ? <Hello /> : null}
      <BackButton />
    </div>
  );
}

export default Practise;

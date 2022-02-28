import React, { useEffect } from "react";

function Hello() {
  useEffect(() => {
    return () => {
      console.log("Hye!  im child bye bye");
    };
  }, []);
  return <div>Hello</div>;
}

export default Hello;

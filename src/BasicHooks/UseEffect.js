import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import BackButton from "../Utilities/BackButton";

function UseEffect() {
  const [flag, setFlag] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setImage(data.message))
      .then(setFlag(false));
  }, [flag]);

  function handleChange(e) {
    setFlag(true);
  }

  return (
    <div className="fetch">
      <Button onClick={handleChange} variant="outlined" size="large">
        Search
      </Button>
      {image && <img className="photo" src={image}></img>}
      <BackButton />
    </div>
  );
}

export default UseEffect;

// https://api.genderize.io?name=luc

// https://api.nationalize.io?name=nathaniel

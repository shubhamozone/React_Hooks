import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function BackButton() {
  return (
    <div className="backbutton">
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
}

export default BackButton;

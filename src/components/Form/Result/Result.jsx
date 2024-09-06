import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BirthContext } from "../../../context/BirthContext";

function Result() {
  const { birthData } = useContext(BirthContext);
  console.log(JSON.stringify(birthData));

  const location = useLocation();
  //   const astrologyData = location.state?.astrologyData;

  if (Object.keys(birthData).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="result-container">
      <h1>Your Astrology Chart</h1>
      <p>Sun Sign: </p>
      <p>Ascendant: </p>
      <p>Houses:</p>
    </div>
  );
}

export default Result;

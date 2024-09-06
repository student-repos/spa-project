import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { BirthContext } from "../../context/BirthContext";

function Result() {
  const { birthData, aspectData } = useContext(BirthContext);


  const location = useLocation();
  //   const astrologyData = location.state?.astrologyData;

  if (Object.keys(birthData).length === 0) {
    return <div>Loading...</div>;
  }

  const aspectList = aspectData.map(object => {
    const { p1_name, aspect, p2_name, diff, orbit  } = object

    return (
      <p
        key={p1_name+p2_name}
      >
        {p1_name} {aspect} with {p2_name}: {diff}
      </p>
    )
  })

  return (
    <div className="result-container">
      <h1>Your Astrology Chart</h1>
      <p>Sun: {birthData.subject.sun.sign}</p>
      <p>Moon: </p>
      <p>Mercury:</p>
      <p>Saturn:</p>
      {aspectList}
    </div>
  );
}

export default Result;

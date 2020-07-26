import React from "react";

const ScoreBar = (props) => {
  const { scorePercentage, maxPercentage, minPercentage } = props;
  console.log("scorePercentage: " + scorePercentage);
  console.log("maxPercentage " + maxPercentage);
  //   console.log(minPercentage);
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    margin: 50,
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 0,
    position: "absolute",
    bottom: 0,
  };

  const scoreFillStyles = {
    height: "100%",
    width: `${scorePercentage}%`,
    backgroundColor: "##717171",
    borderRadius: "inherit",
    position: "absolute",
    top: 0,
    zIndex: "1",
  };
  const minFillStyles = {
    height: "100%",
    width: `${minPercentage}%`,
    backgroundColor: "#000",
    borderRadius: "inherit",
    position: "absolute",
    top: 0,
    zIndex: "1",
  };
  const maxFillStyles = {
    height: "100%",
    width: `${maxPercentage}%`,
    backgroundColor: "#d2d2d2",
    borderRadius: "inherit",
    position: "absolute",
    top: 0,
  };

  return (
    <div style={containerStyles}>
      <div style={scoreFillStyles}></div>
      <div style={minFillStyles}></div>
      <div style={maxFillStyles}></div>
    </div>
  );
};

export default ScoreBar;

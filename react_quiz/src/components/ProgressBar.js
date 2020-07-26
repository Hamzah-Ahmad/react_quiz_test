import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    margin: 50,
    paddingLeft: 0,
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 0,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  //   const labelStyles = {
  //     padding: 5,
  //     color: "white",
  //     fontWeight: "bold",
  //   };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        {/* <span style={labelStyles}>{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

export default ProgressBar;

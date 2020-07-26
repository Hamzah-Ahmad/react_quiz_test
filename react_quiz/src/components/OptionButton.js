import React from "react";

const OptionButton = ({ option, checkAnswer, disableButton }) => {
  const buttonStyle = {
    width: "50%",
    marginTop: 10,
  };
  return (
    <button
      onClick={() => checkAnswer(option)}
      disabled={disableButton}
      style={buttonStyle}
    >
      {decodeURIComponent(option)}
    </button>
  );
};

export default OptionButton;

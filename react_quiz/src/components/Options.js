import React from "react";
import OptionButton from "./OptionButton";
const Options = ({ answers, checkAnswer, disableButton }) => {
  const optionStyles = {
    display: "flex",
    flexWrap: "wrap",
    width: "50%",
    margin: "auto",
  };
  return (
    <div style={optionStyles}>
      {answers.map((option) => (
        <OptionButton
          key={Math.random()}
          option={option}
          checkAnswer={checkAnswer}
          disableButton={disableButton}
        />
      ))}
    </div>
  );
};

export default Options;

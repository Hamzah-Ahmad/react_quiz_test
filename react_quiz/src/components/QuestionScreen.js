import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
const QuestionScreen = ({ questionObj }) => {
  let rating;
  switch (questionObj.difficulty) {
    case "easy":
      rating = 1;
      break;
    case "medium":
      rating = 2;
      break;
    case "hard":
      rating = 3;
      break;
    default:
      rating = 1;
  }
  return (
    <div>
      <Rater rating={rating} total={5} interactive={false} />
      <h4>{decodeURIComponent(questionObj.question)}</h4>
    </div>
  );
};

export default QuestionScreen;

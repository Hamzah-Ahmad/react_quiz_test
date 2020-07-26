import React, { useState, useEffect } from "react";
import data from "../data";
import Options from "./Options";
import QuestionScreen from "./QuestionScreen";
import ProgressBar from "./ProgressBar";
import ScoreBar from "./ScoreBar";
const MainApp = () => {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [message, setMessage] = useState("");
  const [showNext, setShowNext] = useState(false);
  const [increaseScore, setIncreaseScore] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [score, setScore] = useState(0);
  const maxScore = data.length;
  const increaseCounter = () => {
    if (increaseScore) {
      setScore(score + 1);
    }
    if (questionCounter < data.length - 1) {
      setQuestionCounter(questionCounter + 1);
    } else {
      alert("The quiz is complete");
    }
  };
  const currentQuestion = data[questionCounter];
  let answers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];
  answers = answers.sort();

  const checkAnswer = (selectedOption) => {
    setDisableButton(true);
    if (selectedOption === currentQuestion.correct_answer) {
      setMessage("Correct");
      setIncreaseScore(true);
    } else {
      setMessage("Incorrect");
    }
    setShowNext(true);
  };
  const labelStyle = {
    position: "absolute",
    bottom: 100,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  };
  useEffect(() => {
    // console.log(questionCounter);
    setMessage("");
    setShowNext(false);
    setDisableButton(false);
    setIncreaseScore(false);
  }, [questionCounter]);

  return (
    <div>
      <ProgressBar
        bgcolor={"gray"}
        completed={
          questionCounter < data.length - 1 ? (questionCounter + 1) * 5 : 100
        }
      />
      <div style={{ textAlign: "center" }}>
        <h4>
          Question {questionCounter + 1} of {data.length}
        </h4>
        <QuestionScreen questionObj={currentQuestion} />
        <Options
          answers={answers}
          checkAnswer={checkAnswer}
          currentQuestion={currentQuestion}
          disableButton={disableButton}
        />
        <h4>{message}</h4>
        {showNext && <button onClick={increaseCounter}>Next Question</button>}
        <div style={labelStyle}>
          <div>
            Score:{" "}
            {score === 0 ? 0 : Math.floor((score / questionCounter) * 100)}%
          </div>

          <div>
            Max Score:{" "}
            {((score + (maxScore - questionCounter)) / maxScore) * 100}%
          </div>
        </div>
        <ScoreBar
          scorePercentage={(score / questionCounter) * 100}
          maxPercentage={
            ((score + (maxScore - questionCounter)) / maxScore) * 100
          }
          minPercentage={(score / maxScore) * 100}
        />
      </div>
    </div>
  );
};

export default MainApp;

import { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    seletedAnswer: "",
    isCorrect: null,
  });

  return (
    <div id="question">
      {/* <MyComponent /> */}
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffleAnswers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

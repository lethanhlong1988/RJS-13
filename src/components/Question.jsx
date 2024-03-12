import { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";

export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  //   const [answer, setAnswer] = useState({
  //     seletedAnswer: "",
  //     isCorrect: null,
  //   });

  const shuffleAnswers = [...QUESTIONS[index].answers];
  shuffleAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="question">
      {/* <MyComponent /> */}
      <QuestionTimer key={index} timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{QUESTIONS[index].text}</h2>
      <ul id="answers">
        {shuffleAnswers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => onSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

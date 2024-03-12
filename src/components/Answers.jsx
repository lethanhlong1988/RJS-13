export default function Answers({ answers, onSelectAnswer }) {
  return (
    <ul id="answers">
      {answers.map((answer) => (
        <li key={answer} className="answer">
          <button onClick={() => onSelectAnswer(answer)}>{answer}</button>
        </li>
      ))}
    </ul>
  );
}

import React, { useState } from "react";

import "./index.css";

const FAQuestion = ({ question, answer, small }) => {
  const [showAnswer, setshowAnswer] = useState(false);
  return (
    <li className={`question-group ${showAnswer ? "is-open" : ""}`}>
      <h3
        className={`question ${small ? "small" : ""}`}
        onClick={() => setshowAnswer(!showAnswer)}
      >
        {question}
        <div className="icon icon-plus"></div>
        <div className="icon icon-close"></div>
      </h3>
      <div
        className="answer"
        style={{
          "maxHeight": showAnswer ? "700px" : 0
        }}
      >
        <p>{answer}</p>
      </div>
    </li>
  );
}

export default FAQuestion;

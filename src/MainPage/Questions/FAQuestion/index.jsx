import React, { useState } from "react";

import "./index.css";

function FAQuestion({ question, answer, small }) {
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
          "max-height": showAnswer ? "700px" : 0
        }}
      >
        <p>{answer}</p>
      </div>
    </li>
  );
}

export default FAQuestion;

// @flow
import React, { useState, memo } from "react";
import type { Element, Config } from "react";

import "./index.css";

type Props = {
  question: string,
  answer: Element<"span">,
  small: boolean
};

const FAQuestion = ({
  question,
  answer,
  small = false
}: Props): Element<"li"> => {
  const [showAnswer, setshowAnswer] = useState<boolean>(false);
  return (
    <li className={`question-group ${showAnswer ? "is-open" : ""}`}>
      <h3
        className={`question ${small || false ? "small" : ""}`}
        onClick={() => setshowAnswer(!showAnswer)}
      >
        {question}
        <div className="icon icon-plus"></div>
        <div className="icon icon-close"></div>
      </h3>
      <div
        className="answer"
        style={{
          maxHeight: showAnswer ? "700px" : 0
        }}
      >
        <p>{answer}</p>
      </div>
    </li>
  );
};

FAQuestion.defaultProps = {
  small: false
};

export default memo<
  Config<
    Props,
    {
      small: false
    }
  >
>(FAQuestion);

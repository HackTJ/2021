import * as React from "react";

import "./index.css";

type Props = {
  question: string;
  answer: React.ReactElement<"span">;
  small: boolean;
};

const FAQuestion = ({
  question,
  answer,
  small = false,
}: Props) => {
  const [showAnswer, setshowAnswer] = React.useState<boolean>(false);
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
          maxHeight: showAnswer ? "700px" : 0,
        }}
      >
        <p>{answer}</p>
      </div>
    </li>
  );
};

FAQuestion.defaultProps = {
  small: false,
};

export default React.memo(FAQuestion);

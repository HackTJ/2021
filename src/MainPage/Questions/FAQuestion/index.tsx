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
}: Props): JSX.Element => {
  const [showAnswer, setShowAnswer] = React.useState<boolean>(false);
  const toggleShowAnswer = () => setShowAnswer(!showAnswer);
  return (
    <div className={`${showAnswer ? "is-open" : ""}`}>
      <h3 className={`question ${small || false ? "small" : ""}`}>
        <button type="button" onClick={toggleShowAnswer}>
          {question}
        </button>
        <span
          className="icon icon-plus"
          onClick={toggleShowAnswer}
          onKeyDown={toggleShowAnswer}
          role="button"
          aria-label="Show answer"
          tabIndex={0}
        />
        <span
          className="icon icon-close"
          onClick={toggleShowAnswer}
          onKeyDown={toggleShowAnswer}
          role="button"
          aria-label="Hide answer"
          tabIndex={0}
        />
      </h3>
      <div
        className="answer"
        style={{
          maxHeight: showAnswer ? "700px" : 0,
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

FAQuestion.defaultProps = {
  small: false,
};

export default React.memo(FAQuestion);

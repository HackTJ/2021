import React from "react";
import PropTypes from "prop-types";

import "./index.css";

// TODO: HTMLSpanElement for answer?
const FAQuestion: React.FunctionComponent<{
  question: string;
  answer: any;
  small?: boolean;
}> = ({ question, answer, small = false }) => {
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

FAQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.element.isRequired,
  small: PropTypes.bool,
};

FAQuestion.defaultProps = {
  small: false,
};

export default React.memo(FAQuestion);

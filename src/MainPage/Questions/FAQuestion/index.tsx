import { useState, memo } from "react";
import PropTypes from "prop-types";

import "./index.css";

const FAQuestion = ({
  question,
  answer,
  small = false,
}: {
  question: string;
  answer: JSX.Element<"span">;
  small?: boolean;
}) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
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
          tabIndex={-1}
        />
        <span
          className="icon icon-close"
          onClick={toggleShowAnswer}
          onKeyDown={toggleShowAnswer}
          role="button"
          aria-label="Hide answer"
          tabIndex={-1}
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

export default memo(FAQuestion);
import React, { useState } from "react";
// import PropTypes from 'prop-types';

import "./index.css";

type Props = {
  data: { question: string; answer: JSX.Element }[];
};
const FAQuestion: React.FC<Props> = (props) => {
  const [selected, setSelected] = useState(-1);
  return (
    <div className="wrapper">
      {props.data.map((data, i) => (
        <div
          className={`container ${selected === i ? "selected" : ""}${
            selected - 1 === i ? " round-bottom" : ""
          }`}
          key={i}
          onClick={() => {
            setSelected(selected === i ? -1 : i);
          }}
        >
          <div className="header">{data.question}</div>
          <div className="content">
            <div>{data.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(FAQuestion);

import { useState } from "react";
import * as React from "react";

import "./index.css";

type Props = {
  data: { question: string; answer: JSX.Element }[];
};
const FAQuestion: React.FC<Props> = ({ data }: Props) => {
  const [selected, setSelected] = useState(-1);
  return (
    <div className="wrapper">
      {data.map(
        (pair: { question: string; answer: JSX.Element }, i: number) => (
          <div
            className={`container ${selected === i ? "selected" : ""}${
              selected - 1 === i ? " round-bottom" : ""
            }`}
            key={i}
            onClick={() => {
              setSelected(selected === i ? -1 : i);
            }}
          >
            <div className="header">{pair.question}</div>
            <div className="content">
              <div>{pair.answer}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default React.memo(FAQuestion);

import { useState, memo } from "react";
import type { FunctionalComponent } from "react";
import Card from "./Card";

import "./index.css";

type Props = {
  data: { question: string; answer: JSX.Element }[];
};
const FAQuestion: FunctionalComponent<Props> = ({ data }: Props) => {
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
            <Card
              question={pair.question}
              answer={pair.answer}
              collapsed={selected !== i}
            />
          </div>
        )
      )}
    </div>
  );
};

export default memo(FAQuestion);

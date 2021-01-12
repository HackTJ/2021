import { useState, memo } from "react";
import type { FunctionComponent } from "react";
import Card from "./Card";

import styles from "./faquestion.module.css";

type Props = {
  data: { question: string; answer: JSX.Element }[];
};
const FAQuestion: FunctionComponent<Props> = ({ data }: Props) => {
  const [selected, setSelected] = useState(-1);

  return (
    <div className={`${styles.wrapper}`}>
      {data.map(
        (pair: { question: string; answer: JSX.Element }, i: number) => (
          <div
            className={`${styles.container} ${
              selected === i ? styles.selected : ""
            } ${selected - 1 === i ? styles.roundBottom : ""}`}
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

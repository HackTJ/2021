import { h, VNode, FunctionalComponent, Fragment } from "preact";
import { useState, useRef, useCallback, useEffect } from "preact/hooks";
import { memo } from "preact/compat";

import styles from "./card.module.css";

type Props = {
  question: string;
  answer: VNode;
  collapsed: boolean;
};

const Card: FunctionalComponent<Props> = ({
  question,
  answer,
  collapsed,
}: Props) => {
  const [initialHeight, setInitialHeight] = useState(0);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const updateElement = useCallback(() => {
    (contentWrapperRef.current as HTMLDivElement).style.height = `${
      collapsed ? 0 : initialHeight
    }px`;
  }, [collapsed, initialHeight]);

  useEffect(() => {
    setInitialHeight(
      (contentWrapperRef.current as HTMLDivElement).scrollHeight
    );
    updateElement();
  }, [updateElement]);

  useEffect(() => {
    updateElement();
  }, [updateElement, collapsed]);

  // use `Fragment` explicitly to fix `ReferenceError` in the test:
  return (
    <Fragment>
      <div className={styles.header}>{question}</div>
      <div className={styles.content} ref={contentWrapperRef}>
        <div>{answer}</div>
      </div>
    </Fragment>
  );
};

export default memo(Card);

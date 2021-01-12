import React, { useState, useRef, useCallback, useEffect } from "react";

import styles from "./card.module.css";

type Props = {
  question: string;
  answer: JSX.Element;
  collapsed: boolean;
};

const Card: React.FC<Props> = ({ question, answer, collapsed }: Props) => {
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
  }, [
    updateElement,
    (contentWrapperRef.current as HTMLDivElement)?.scrollHeight,
  ]);

  useEffect(() => {
    updateElement();
  }, [updateElement, collapsed]);

  return (
    <>
      <div className={styles.header}>{question}</div>
      <div className={styles.content} ref={contentWrapperRef}>
        <div>{answer}</div>
      </div>
    </>
  );
};

export default Card;

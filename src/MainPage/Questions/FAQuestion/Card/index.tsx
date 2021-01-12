import React, { useState, useRef, useEffect } from 'react';

import styles from './card.module.css';

type Props = {
    question: string,
    answer: JSX.Element,
    collapsed: boolean
  };

const Card: React.FC<Props> = ({question, answer, collapsed}: Props) => {
  const [initialHeight, setInitialHeight] = useState(0);
  const contentWrapperRef = useRef<HTMLDivElement>(null);

  const updateElement = () => {
    (contentWrapperRef.current as HTMLDivElement).style.height =
    (collapsed ? 0 : initialHeight) + 'px';
  }
  
  useEffect(() => {
    setInitialHeight(
      (contentWrapperRef.current as HTMLDivElement).scrollHeight
    );
    updateElement();
  }, [contentWrapperRef.current]);

  useEffect(() => {
    updateElement();
  }, [collapsed]);

    return (
        <>
            <div className={styles.header}>{question}</div>
            <div className={styles.content} ref={contentWrapperRef}>
                <div>{answer}</div>
            </div>
        </>
    )
}

export default Card;

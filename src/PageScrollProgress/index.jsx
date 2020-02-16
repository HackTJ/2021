import React, { useState, useEffect } from "react";

const PageScrollProgress = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const currentScrollPostion = Math.floor(
      (scrollTop / totalDocScrollLength) * 100
    );

    setScrollPosition(currentScrollPostion);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const scrollEvent = () => {
    requestAnimationFrame(() => {
      calculateScrollDistance();
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  });

  return (
    <div
      style={{
        position: "fixed",
        background:
          `linear-gradient(to right, rgba(255, 255, 255, 0.9) ${scrollPosition}%, transparent 0)`,
        width: "100%",
        height: "6px",
        zIndex: 10001
      }}
    ></div>
  );
};

export default PageScrollProgress;

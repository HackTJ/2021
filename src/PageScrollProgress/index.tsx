import * as React from "react";

const PageScrollProgress = () => {
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);

  const getDocHeight = (): number => {
    // TODO: Flow still returns errors
    const bodyExists: boolean = document.body !== null;
    const docElExists: boolean = document.documentElement !== null;
    return Math.max(
      bodyExists ? document.body.scrollHeight : 0,
      docElExists ? document.documentElement.scrollHeight : 0,
      bodyExists ? document.body.offsetHeight : 0,
      docElExists ? document.documentElement.offsetHeight : 0,
      bodyExists ? document.body.clientHeight : 0,
      docElExists ? document.documentElement.clientHeight : 0
    );
  };

  const calculateScrollDistance = (): void => {
    const scrollTop: number = window.pageYOffset; // how much the user has scrolled by
    const winHeight: number = window.innerHeight;
    const docHeight: number = getDocHeight();

    const totalDocScrollLength: number = docHeight - winHeight;
    const currentScrollPostion: number = Math.floor(
      (scrollTop / totalDocScrollLength) * 100
    );

    setScrollPosition(currentScrollPostion);
  };

  const scrollEvent = (): void => {
    requestAnimationFrame(() => {
      calculateScrollDistance();
    });
  };

  React.useEffect(() => {
    document.addEventListener("scroll", scrollEvent);
    return () => window.removeEventListener("scroll", scrollEvent);
  });

  let barBackground: string = `linear-gradient(to right, rgba(255, 255, 255, 0.9) ${scrollPosition}%, transparent 0)`;
  return (
    <div
      style={{
        position: "fixed",
        background: barBackground,
        width: "100%",
        height: "6px",
        zIndex: 10001,
      }}
    ></div>
  );
};

export default React.memo(PageScrollProgress);

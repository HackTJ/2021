import * as React from "react";

const MLHTrustBadge = (): JSX.Element => (
  <a
    id="mlh-trust-badge"
    href="https://mlh.io/seasons/na-2021/events?utm_source=na-hacktahon&amp;utm_medium=TrustBadge&amp;utm_campaign=2021-season&amp;utm_content=white"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "block",
      maxWidth: "100px",
      minWidth: "60px",
      position: "fixed",
      right: "50px",
      top: 0,
      width: "10%",
      zIndex: 10000,
    }}
  >
    <img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg"
      alt="Major League Hacking 2021 Hackathon Season"
      style={{
        width: "100%",
      }}
    />
  </a>
);

export default MLHTrustBadge;

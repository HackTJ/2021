import React from "react";

import "./index.css";

const IndeterminateLoadingIndicator = () => (
  <div className="loading">
    <svg
      xmlns="https://www.w3.org/2000/svg"
      viewBox="-1 -1 34 34"
      className="progress"
    >
      <circle cx="16" cy="16" r="16" className="weak" />

      <circle cx="16" cy="16" r="16" className="strong" />
    </svg>
  </div>
);

export default IndeterminateLoadingIndicator;

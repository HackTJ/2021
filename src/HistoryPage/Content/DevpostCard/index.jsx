import React from "react";

import "./index.css";

const DevpostCard = ({logo, iteration, year, url}) => (
  <div className="history-section">
    <div className="action-section">
      <img
        src={logo}
        style={{
          width: "200px",
          height: "200px"
        }}
        alt={"HackTJ " + iteration}
      />
      <div className="info-container">
        <h3 className="section-title">HackTJ {iteration}</h3>
        <h4 className="section-year">{year}</h4>
        <a
          className="altbutton"
          style={{ width: "100%" }}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          DevPost
        </a>
      </div>
    </div>
  </div>
);

export default DevpostCard;

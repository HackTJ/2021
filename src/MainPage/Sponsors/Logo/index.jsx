import React, { useState, memo } from "react";

import ReactTooltip from "react-tooltip";

import "./index.css";

const Logo = ({ url, name, logo }) => {
  const sponsorID = name.toLowerCase().replace(/ /g, "-");

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <a
        href={url}
        className="sponsor-wrapper"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="data-tip"
        data-for={sponsorID}
      >
        <img
          id={"img-" + sponsorID}
          className={`sponsor-image ${showTooltip ? "hover" : ""}`}
          src={logo}
          alt={name}
        />
      </a>
      <ReactTooltip
        id={sponsorID}
        place="top"
        type="dark"
        effect="solid"
        afterShow={evt => {
          setShowTooltip(true);
        }}
        afterHide={evt => {
          setShowTooltip(false);
        }}
      >
        {name}
      </ReactTooltip>
    </>
  );
};

export default memo(Logo);

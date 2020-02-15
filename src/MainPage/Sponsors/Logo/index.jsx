import React from "react";

import ReactTooltip from "react-tooltip";

import "./index.css";

const Logo = ({ url, name, logo }) => (
  <>
    <a
      href={url}
      className="sponsor-wrapper"
      target="_blank"
      rel="noopener noreferrer"
      data-tip="data-tip"
      data-for={name}
    >
      <img
        className="sponsor-image"
        src={logo}
        alt={name}
      />
    </a>
    <ReactTooltip id={name} place="top" type="dark" effect="solid">
      {name}
    </ReactTooltip>
  </>
);

export default Logo;

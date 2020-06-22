// @flow
import React, { useState, memo } from "react";
import type { Element } from "react";

import ReactTooltip from "react-tooltip";

import "./index.css";

type Props = {
  url: string,
  name: string,
  logo: string
};

const Logo = ({ url, name, logo }: Props): Element<typeof React.Fragment> => {
  const sponsorID: string = name.toLowerCase().replace(/ /g, "-");

  const [
    showTooltip: boolean,
    setShowTooltip: (newShowTooltip: boolean) => void
  ] = useState<boolean>(false);

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
        <>
          <img
            id={"img-normal-" + sponsorID}
            className={`sponsor-image normal ${showTooltip ? "show" : "hide"}`}
            src={require("../../../images/sponsors/normal/" + logo)}
            alt={name}
          />
          <img
            id={"img-tint-" + sponsorID}
            className={`sponsor-image tint ${showTooltip ? "hide" : "show"}`}
            src={require("../../../images/sponsors/tint/" + logo)}
            alt={name}
          />
        </>
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

export default memo<Props>(Logo);

import React, { useState, memo } from "react";

import { Tooltip } from "reactstrap";

import "./index.css";

type Props = {
  url: string;
  name: string;
  logo: string;
};

const Logo = ({
  url,
  name,
  logo,
}: Props) => {
  const sponsorID: string = name.toLowerCase().replace(/ /g, "-");

  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  return (
    <>
      <a
        href={url}
        className="sponsor-wrapper"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="data-tip"
        data-for={sponsorID}
        id={"img-" + sponsorID}
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
      <Tooltip
        id={sponsorID}
        placement="top"
        type="dark"
        effect="solid"
        isOpen={showTooltip}
        toggle={() => setShowTooltip(!showTooltip)}
        autohide={false}
        target={"img-" + sponsorID}
      >
        {name}
      </Tooltip>
    </>
  );
};

export default memo<Props>(Logo);

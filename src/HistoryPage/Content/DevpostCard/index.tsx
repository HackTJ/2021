import * as React from "react";

import "./index.css";

type Props = {
  logo: string;
  iteration: string;
  year: string;
  url: string;
  disabled: boolean;
};

const DevpostCard = ({
  logo,
  iteration,
  year,
  url,
  disabled,
}: Props): JSX.Element => (
  <div className="history-section">
    <div className="action-section">
      <img
        src={logo}
        style={{
          width: "200px",
          height: "200px",
        }}
        alt={`HackTJ ${iteration}`}
      />
      <div className="info-container">
        <h3 className="section-title">HackTJ {iteration}</h3>
        <h4 className="section-year">{year}</h4>
        {/* TODO: accessibility, jsx-a11y/anchor-is-valid */}
        <a
          className="altbutton"
          style={{ width: "100%" }}
          href={disabled ? undefined : url}
          target="_blank"
          rel="noopener noreferrer"
        >
          DevPost
        </a>
      </div>
    </div>
  </div>
);

DevpostCard.defaultProps = {
  disabled: false,
};

export default DevpostCard;

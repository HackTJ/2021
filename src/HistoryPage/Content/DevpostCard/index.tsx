import PropTypes from "prop-types";

import "./index.css";

const DevpostCard = ({
  logo,
  iteration,
  year,
  url,
  disabled = false,
}: {
  logo: string;
  iteration: string;
  year: string;
  url: string;
  disabled?: boolean;
}) => (
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
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a
          className="altbutton"
          style={{ width: "100%" }}
          href={disabled ? undefined : url}
          target="_blank"
          rel="noopener noreferrer"
        >
          DevPost
        </a>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </div>
    </div>
  </div>
);

DevpostCard.propTypes = {
  logo: PropTypes.string.isRequired,
  iteration: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

DevpostCard.defaultProps = {
  disabled: false,
};

export default DevpostCard as const;

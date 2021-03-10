import { h, FunctionalComponent } from "preact";
import { memo } from "preact/compat";

import "./index.css";

type Props = {
  logo: string;
  iteration: string;
  year: string;
  url: string;
  disabled?: boolean;
};
const DevpostCard: FunctionalComponent<Props> = ({
  logo,
  iteration,
  year,
  url,
  disabled = false,
}: Props) => (
  <div class="history-section card">
    <img
      alt={`HackTJ ${iteration}`}
      src={logo}
      style={{
        width: "200px",
        height: "200px",
      }}
      className="card-img"
      decoding="async"
    />
    <div class="info-container card-body">
      <h2 class="section-title card-title">HackTJ {iteration}</h2>
      <h3 class="section-year card-subtitle">{year}</h3>
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
);

export default memo<Props>(DevpostCard);

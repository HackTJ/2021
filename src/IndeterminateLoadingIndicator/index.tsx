import * as React from "react";

import "./index.css";

import BounceLoader from "react-spinners/BounceLoader";

const IndeterminateLoadingIndicator = (): JSX.Element => (
  <div className="loading">
    <BounceLoader color="#33cccc" size={120} />
  </div>
);

export default IndeterminateLoadingIndicator;

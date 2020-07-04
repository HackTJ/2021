// @flow
import React from "react";

import "./index.css";

import BounceLoader from "react-spinners/BounceLoader";

const IndeterminateLoadingIndicator: React.StatelessFunctionalComponent<{}> = (): React.Element<
  "div"
> => (
  <div className="loading">
    <BounceLoader color={"#65d861"} size={120} />
  </div>
);

export default IndeterminateLoadingIndicator;

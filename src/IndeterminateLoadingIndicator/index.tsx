import BounceLoader from "react-spinners/BounceLoader";

const SPINNER_SIZE = 120;
const middle = `calc(50% - ${SPINNER_SIZE}px / 2)`;
const IndeterminateLoadingIndicator = (): JSX.Element => (
  <span
    style={{
      marginLeft: "0",
      marginTop: "0",
      position: "absolute",
      top: middle,
      left: middle,
    }}
  >
    <BounceLoader
      color={getComputedStyle(document.documentElement).getPropertyValue(
        "--theme-primary"
      )}
      size={SPINNER_SIZE}
    />
  </span>
);

export default IndeterminateLoadingIndicator;

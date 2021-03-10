import { h, FunctionalComponent } from "preact";
import { memo } from "preact/compat";
import { usePopperTooltip } from 'react-popper-tooltip';

import styles from "./logo.module.css";

type Props = {
  url: string;
  name: string;
  logo: string;
};

const Logo: FunctionalComponent<Props> = ({ url, name, logo }: Props) => {
  const sponsorID: string = logo.replace(/\.[^/.]+$/, ""); // remove extension

  const {
    // getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({placement: 'top'});

  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
        ref={setTriggerRef}
      >
        <img
          className={`${styles.logo} ${styles.normal} ${visible ? styles.showLogo : styles.hideLogo
            }`}
          src={require(`../../../../images/sponsors/normal/${logo}`).default}
          alt={name}
          loading="lazy"
          decoding="async"
        />
        <img
          className={`${styles.logo} ${visible ? styles.hideLogo : styles.showLogo
            }`}
          src={require(`../../../../images/sponsors/tint/${logo}`).default}
          alt={name}
          loading="lazy"
          decoding="async"
        />
      </a>
      {visible && (
        <span
          ref={setTooltipRef}
          {...getTooltipProps({ className: styles.tooltip })}
        >
          {name}
        </span>
      )}
    </>
  );
};

export default memo<Props>(Logo);

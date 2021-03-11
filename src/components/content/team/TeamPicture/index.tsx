import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { memo } from "preact/compat";

import styles from "./teampicture.module.css";

type Props = {
  name: string;
  image: string;
  about: string;
};

const TeamPicture: FunctionalComponent<Props> = ({
  name,
  image,
  about,
}: Props) => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <figure className={`${styles.wrapper} ${showAbout ? "is-open" : ""}`}>
      <div
        className={styles.imgParent}
        onClick={() => setShowAbout(!showAbout)}
      >
        <img
          src={require(`../../../../images/team/${image}`).default}
          alt={name}
          className={styles.img}
          loading="lazy"
          width="200"
          height="200"
          decoding="async"
        />
        <span className={styles.personName}>{name}</span>
      </div>
      <figcaption
        className={styles.personBiography}
        style={{
          // can't use 100% here because that ruins the animation
          maxHeight: showAbout ? "100vh" : 0,
        }}
      >
        <p>{about}</p>
      </figcaption>
    </figure>
  );
};

export default memo<Props>(TeamPicture);

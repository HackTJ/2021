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
    <li className={`${styles.wrapper} ${showAbout ? "is-open" : ""}`}>
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
        <div className={styles.imgOverlay}>
          <div className={styles.personName}>
            {name}
          </div>
        </div>
      </div>
      <div
        className={styles.personBiography}
        style={{
          maxHeight: showAbout ? "500px" : 0,
        }}
      >
        <p>{about}</p>
      </div>
    </li>
  );
};

export default memo<Props>(TeamPicture);

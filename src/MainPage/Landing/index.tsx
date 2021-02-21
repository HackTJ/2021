import config from "../../config";

import type { FunctionComponent } from "react";

import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";

import styles from "./landing.module.css";

import { ReactComponent as Logo } from "../../images/bigweblogo.svg";

const startDate = config.event.start.toLocaleString(DateTime.DATE_FULL);
const endDate = config.event.end.toLocaleString(DateTime.DATE_FULL);

const Landing: FunctionComponent<{}> = () => (
  <section className={styles.hero}>
    <Tilt
      className={styles.tilt}
      trackOnWindow
      gyroscope
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
    >
      <Logo className={styles.logo} />
      <div className={styles.date}>
        {startDate} &ndash; {endDate}
      </div>
      <div className={styles.location}>Online</div>
      <div className="register-button-block-old top">
        {/* <Link
           className="button register-button mentor blackbutton"
           to="registration"
          >
           Register for HackTJ 8.0
          </Link> */}
        <a
          className="button register-button mentor blackbutton"
          href="https://www.facebook.com/pg/HackTJOfficial/photos/?tab=album&album_id=2168769876535523"
          target="_blank"
          rel="noopener noreferrer"
        >
          2019 Pictures
        </a>
        <Link
          className="button register-button mentor blackbutton"
          to="history"
        >
          Past Projects
        </Link>
        {/* <a className="button register-button mentor" href="https://hacktj2019.devpost.com/">Devpost</a> */}
      </div>
    </Tilt>
  </section>
);

export default Landing;

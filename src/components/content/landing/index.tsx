import { h, FunctionalComponent } from "preact";
import Tilt from "react-parallax-tilt";

import styles from "./landing.module.css";
import config from "../../../config";
// import Logo from "../../../images/bigweblogo.svg";

const dateFormat = "MMMM D, YYYY";
const startDate = config.event.start.format(dateFormat);
const endDate = config.event.end.format(dateFormat);

const Landing: FunctionalComponent = () => (
  <section className={styles.hero}>
    <Tilt
      className={styles.tilt}
      trackOnWindow
      gyroscope
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
    >
      {/* <Logo className={styles.logo} /> */}
      <div className={styles.date}>
        {startDate} &ndash; {endDate}
      </div>
      <div className={styles.location}>Online</div>
      <div className="register-button-block-old top">
        {/*
          TODO: show this link only if the `/registration` route is enabled.
          maybe do this using a config variable and `preval` in App.tsx and
          `preval` here to control at build-time whether `/registration` should
          be enabled.
        */}
        <a
          className="button register-button mentor blackbutton"
          href="registration"
        >
          Register for HackTJ 8.0
        </a>
        <a
          className="button register-button mentor blackbutton"
          href="https://www.facebook.com/pg/HackTJOfficial/photos/?tab=album&album_id=2168769876535523"
          target="_blank"
          rel="noopener noreferrer"
        >
          2019 Pictures
        </a>
        <a className="button register-button mentor blackbutton" href="history">
          Past Projects
        </a>
        {/* <a className="button register-button mentor" href="https://hacktj2019.devpost.com/">Devpost</a> */}
      </div>
    </Tilt>
  </section>
);

export default Landing;

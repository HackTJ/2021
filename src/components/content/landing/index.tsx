import { h, FunctionalComponent, JSX } from "preact";
import Tilt from "react-parallax-tilt";

import styles from "./landing.module.css";
import config from "../../../config";

const dateFormat = "MMMM D, YYYY";
const startDate = config.event.start.format(dateFormat);
const endDate = config.event.end.format(dateFormat);

const Logo: FunctionalComponent = (props: JSX.SVGAttributes<SVGSVGElement>) => (
  <svg x="0" y="0" viewBox="209 767.5 2922 1805" {...props}>
    <g>
      <path fill="none" d="M0 0h3340v3340H0z" />
    </g>
    <g>
      <ellipse
        style="stroke-linecap:square;fill:none;stroke:#333;stroke-width:30;stroke-miterlimit:15.1181"
        cx="1670"
        cy="1819.8"
        rx="568.9"
        ry="539.5"
      />
      <g>
        <path
          style="fill:none;stroke:#333;stroke-width:30;stroke-miterlimit:15.1181"
          d="M1670 2185.1l-476.4-1150.2 476.4 245.4-507.4 134.8 507.4 813.8m0-43.8l476.4-1150.2-476.4 245.4 507.4 134.8-507.4 813.8"
        />
        <path
          style="fill:none;stroke:#333;stroke-width:30;stroke-miterlimit:15.1181"
          d="M1642.9 1287.5l27.1 1071.7V1280.3m27.1 7.2L1670 2359.2V1280.3"
        />
      </g>
    </g>
    <g>
      <circle
        style="stroke-linecap:square;fill:none;stroke:#333;stroke-width:30;stroke-miterlimit:15.1181"
        cx="1670"
        cy="1670"
        r="887.5"
      />
    </g>
    <g>
      <linearGradient
        id="path1277_1_"
        gradientUnits="userSpaceOnUse"
        x1="209"
        y1="1200.5"
        x2="3131"
        y2="1200.5"
        gradientTransform="matrix(1 0 0 -1 0 3340)"
      >
        <stop offset="0" stop-color="#45c2c5" />
        <stop offset=".5" />
        <stop offset="1" stop-color="#45c2c5" />
      </linearGradient>
      <path
        d="M2486.2 2019.6H3131l-117.9 119.9h-527l.1-119.9zm0 239.8H3131l-117.9-119.9h-527l.1 119.9zM853.8 2019.6H209l117.9 119.9h527v-119.9h-.1zm0 239.8H209l117.9-119.9h527v119.9h-.1z"
        fill="url(#path1277_1_)"
      />
    </g>
    <g>
      <path
        d="M622.8 1908.3h2094.3v477.9H622.8v-477.9z"
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#45c2c5"
      />
    </g>
    <g>
      <g style="fill:#fff">
        <path d="M1044.4 2305.4v-164.5H832.5v164.5h-12.3v-331.8h12.3v154.9h211.9v-154.9h12.3v331.8h-12.3z" />
        <path d="M1113.9 2305.4l124.2-331.8h15l124.2 331.8h-13.4l-36.9-99.1h-162.7l-36.9 99.1h-13.5zm54.9-111.5h153.6l-76.8-205.5-76.8 205.5z" />
        <path d="M1641.4 2203.7h12.3c-3.3 35.9-15.6 62.5-36.7 80s-48.3 26.2-81.6 26.2c-36.5 0-65.6-13.4-87.5-40.3-21.7-26.9-32.6-62-32.6-105.3v-49.7c0-43.3 10.9-78.4 32.6-105.3 21.9-26.9 51-40.3 87.5-40.3 33.3 0 60.5 8.8 81.6 26.4 21.1 17.5 33.3 43.9 36.7 79.3h-12.3c-7-62.3-42.3-93.4-106-93.4-32.2 0-58.3 12.2-78.2 36.5-19.7 24.3-29.6 56.4-29.6 96.4v50.1c0 40.3 9.9 72.5 29.6 96.8 19.9 24.3 46 36.5 78.2 36.5 30.8 0 55.4-7.5 73.6-22.6 18.3-15 29.1-38.8 32.4-71.3z" />
        <path d="M1948.3 2305.4l-152.4-174.5-53.1 49v125.6h-12.3v-331.8h12.3v191.6l54.2-52.9 138.1-138.8h17.8l-147.7 148.6 159 183.2h-15.9z" />
        <path d="M2096.2 1985.9v-12.3H2350v12.3h-120.8v319.5H2217v-319.5h-120.8z" />
        <path d="M2507.5 2204.6v-231.1h12.3v231.1c0 34-9.2 60.1-27.6 78.2-18.4 18.1-41.1 27.1-68.1 27.1-29.3 0-52.6-7.8-70-23.5-17.2-15.8-25.7-40-25.7-72.5h12.3c0 55.8 27.8 83.6 83.4 83.6 22.8 0 42.4-7.8 58.8-23.5 16.4-15.5 24.6-38.7 24.6-69.4z" />
      </g>
    </g>
  </svg>
);

const Landing: FunctionalComponent = () => (
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

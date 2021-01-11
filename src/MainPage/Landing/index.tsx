import * as React from "react";

import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import "./index.css";

// import { ReactComponent as Logo } from "../../images/bigweblogo.svg";
import logo from "../../images/bigweblogo.png";

const Landing: React.FunctionComponent = () => (
  <section className="hero">
    <div className="container">
      <Tilt
        className="event-container"
        trackOnWindow
        gyroscope
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
      >
        {/* <Logo className="logo" /> */}
        <img src={logo} className="logo" alt="HackTJ" />
        <div className="event-date landing">April 24th-25th, 2021</div>
        <div className="event-location landing">
          Cvent HQ (1765 Greensboro Station Pl, McLean, VA 22102)
        </div>
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
    </div>
  </section>
);

export default Landing;

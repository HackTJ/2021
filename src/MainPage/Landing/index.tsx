import * as React from "react";

import { Link } from "react-router-dom";

import "./index.css";

const logo = require("../../images/bigweblogo.png");

const Landing = (): JSX.Element => (
  <section className="hero">
    <div className="container">
      <div className="event-container">
        <img className="logo" src={String(logo)} alt="HackTJ" />
        <div className="event-date landing">November 21st-22nd, 2020</div>
        <div className="event-location landing">Online</div>
        <div className="register-button-block-old top">
          {/* <Link
           className="button register-button mentor blackbutton"
           to="/registration"
          >
           Register for HackTJ 7.0
          </Link> */}
          <a
            className="button register-button mentor blackbutton"
            href="https://www.facebook.com/pg/HackTJOfficial/photos/?tab=album&album_id=2168769876535523"
          >
            2019 Pictures
          </a>
          <Link
            className="button register-button mentor blackbutton"
            to="/history"
          >
            Past Projects
          </Link>
          {/* <a className="button register-button mentor" href="https://hacktj2019.devpost.com/">Devpost</a> */}
        </div>
      </div>
    </div>
  </section>
);

export default Landing;

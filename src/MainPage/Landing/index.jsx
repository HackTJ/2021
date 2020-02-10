import React, { Component } from "react";
import { Link } from "react-router-dom";
import MLHTrustBadge from "./MLHTrustBadge";
import "./index.css";

class Landing extends Component {
  render() {
    return (
      <section className="hero">
        <MLHTrustBadge />
        <div className="container">
          <img
            className="logo"
            src={require("../../images/bigweblogo.png")}
            alt="HackTJ"
          />
          <div className="event-announcement">
            Registration opens on February 10 at 8 p.m. and closes on February
            24
          </div>
          <div className="event-date">March 21-22, 2020</div>
          <div className="event-location">
            Thomas Jefferson High School for Science and Technology
          </div>
          <div className="register-button-block-old top">
            <a
              className="button register-button mentor"
              href="https://www.facebook.com/pg/HackTJOfficial/photos/?tab=album&album_id=2168769876535523"
            >
              2019 Pictures
            </a>
            <Link className="button register-button mentor" to="/history">
              Past Projects
            </Link>
            {/*<a className="button register-button mentor" href="https://hacktj2019.devpost.com/">Devpost</a>*/}
            {/*<a className="button register-button mentor" href="https://hacktj2019.devpost.com/">Devpost</a>*/}
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;

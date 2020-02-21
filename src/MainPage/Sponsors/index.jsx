// @flow
import React, { Fragment } from "react";
import type { StatelessFunctionalComponent, Element } from "react";

import Logo from "./Logo";

import "./index.css";

const Sponsors: StatelessFunctionalComponent<{}> = (): Element<
  typeof Fragment
> => (
  <>
    <a className="anchor" id="sponsor">
      Sponsors
    </a>
    <section id="sponsors">
      <div className="container">
        <div className="animation-container vertical top right extra-right extra-height">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Sponsors</h1>
        <div className="partner-container">
          <Logo
            url="https://aws.amazon.com/"
            logo="aws.png"
            name="Amazon Web Services"
          />
          <Logo
            url="https://www.yext.com"
            logo="yext.png"
            name="Yext"
          />
          <Logo
            url="https://www.ensco.com"
            logo="ensco.png"
            name="Ensco"
          />
          <Logo
            url="https://phone2action.com"
            logo="phone2action.png"
            name="Phone2Action"
          />
          <Logo
            url="https://www.wolfram.com"
            logo="wolfram.png"
            name="Wolfram"
          />
          <Logo
            url="https://www.digitalocean.com"
            logo="digitalocean.png"
            name="DigitalOcean"
          />
          <Logo
            url="https://www.collinsaerospace.com"
            logo="collinsaerospace.png"
            name="Collins Aerospace"
          />
          <Logo
            url="https://www.alertfive.io"
            logo="alertfive.png"
            name="Alert Five"
          />
          <Logo
            url="http://razorx2.com/"
            logo="razorx2.png"
            name="RazorX2"
          />
          <Logo
            url="http://hackp.ac/mlh-stickermule-hackathons"
            logo="stickermule.png"
            name="Sticker Mule"
          />
          <Logo
            url="https://www.thinkfun.com"
            logo="thinkfun.png"
            name="ThinkFun"
          />
          <Logo
            url="http://spontit.io"
            logo="spontit.png"
            name="Spontit"
          />
          <Logo
            url="https://ultrapress.com"
            logo="ultrapress.png"
            name="UltraPress"
          />
        </div>
        <p className="large">
          Can't see our sponsors? Try disabling ad block for this page.
        </p>
        <h1 className="section-title">Partners</h1>
        <div className="partner-container">
          <Logo
            url="https://mlh.io"
            logo="mlh.png"
            name="Major League Hacking"
          />
          <Logo
            url="https://www.tjpartnershipfund.org"
            logo="tjpartnershipfund.png"
            name="TJ Partnership Fund"
          />
        </div>
        <p className="large">
          Interested in sponsoring? Check out our{" "}
          <a href="sponsorship.pdf">sponsorship packet</a> and email us at{" "}
          <a href="mailto:sponsor@hacktj.org">sponsor@hacktj.org</a>.
        </p>
      </div>
    </section>
    <div className="animation-container horizontal sponsors">
      <div className="animated right"></div>
    </div>
  </>
);

export default Sponsors;

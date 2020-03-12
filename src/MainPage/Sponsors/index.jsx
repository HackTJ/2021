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
        {/*<div
          className="vertical-segment green"
          style={{
            borderLeft: "6px solid #64d861",
            height: "3%",
            position: "absolute",
            left: "auto",
            right: "-14.3%",
            top: "-3.45%"
          }}
        ></div>
        <div
          className="horizontal-segment green"
          style={{ width: "125%", top: "-0.7%", right: "-14.4%" }}
        ></div>
        <div
          className="vertical-segment green"
          style={{
            borderLeft: "6px solid #64d861",
            left: "-10.6%",
            top: "-0.6%",
            height: "100.6"
          }}
        ></div>*/}
        <h1 className="section-title">Sponsors</h1>
        <div className="partner-container">
          <Logo
            url="https://aws.amazon.com/"
            logo="aws.png"
            name="Amazon Web Services"
          />
          <Logo url="https://www.yext.com" logo="yext.png" name="Yext" />
          <Logo url="https://www.ensco.com" logo="ensco.png" name="Ensco" />
          <Logo
            url="https://cloudwaveinc.com/"
            logo="cloudwave.png"
            name="CloudWave"
          />
          <Logo
            url="https://www.citadelsecurities.com/"
            logo="citadelsecurities.png"
            name="Citadel Securities"
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
            url="https://www.collinsaerospace.com"
            logo="collinsaerospace.png"
            name="Collins Aerospace"
          />
          <Logo
            url="https://www.alertfive.io"
            logo="alertfive.png"
            name="Alert Five"
          />
          <Logo url="http://razorx2.com" logo="razorx2.png" name="RazorX2" />
          <Logo
            url="https://www.verizonmedia.com/"
            logo="verizonmedia.png"
            name="Verizon Media"
          />
          <Logo
            url="https://www.primamedicine.com"
            logo="primamedicine.png"
            name="Prima Medicine"
          />
          <Logo
            url="http://hackp.ac/mlh-stickermule-hackathons"
            logo="stickermule.png"
            name="Sticker Mule"
          />
          <Logo
            url="https://www.digitalocean.com"
            logo="digitalocean.png"
            name="DigitalOcean"
          />
          <Logo
            url="https://www.thinkfun.com"
            logo="thinkfun.png"
            name="ThinkFun"
          />
          <Logo url="http://spontit.io" logo="spontit.png" name="Spontit" />
          <Logo
            url="https://ultrapress.com"
            logo="ultrapress.png"
            name="UltraPress"
          />
          <Logo
            url="https://www.usehawkeye.com"
            logo="hawkeye.png"
            name="Hawkeye"
          />
          <Logo
            url="https://stackoverflow.com"
            logo="stackoverflow.png"
            name="StackOverflow"
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
            url="https://www.cvent.com"
            logo="cvent.png"
            name="Cvent"
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
  </>
);

export default Sponsors;

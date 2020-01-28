import React, { Component } from "react";
import Logo from "./Logo";
import "./index.css";

class Sponsors extends Component {
  render() {
    return (
      <>
        <a className="anchor" id="sponsor"></a>
        <section id="sponsors">
          <div className="container">
            <div className="animation-container vertical top right extra-right extra-height">
              <div className="animated"></div>
            </div>
            <h1 className="section-title">Sponsors</h1>
            <div className="partner-container">
              <Logo
                url="https://aws.amazon.com/"
                logo={require("../../images/sponsors/aws.png")}
                name="Amazon Web Services"
              />
              <Logo
                url="https://www.yext.com"
                logo={require("../../images/sponsors/yext.png")}
                name="Yext"
              />
              <Logo
                url="https://www.ensco.com"
                logo={require("../../images/sponsors/ensco.png")}
                name="Ensco"
              />
              <Logo
                url="https://phone2action.com"
                logo={require("../../images/sponsors/phone2action.png")}
                name="Phone2Action"
              />
              <Logo
                url="https://www.digitalocean.com"
                logo={require("../../images/sponsors/digitalocean.png")}
                name="DigitalOcean"
              />
              <Logo
                url="https://www.collinsaerospace.com"
                logo={require("../../images/sponsors/collinsaerospace.jpeg")}
                name="Collins Aerospace"
              />
              <Logo
                url="https://www.alertfive.io"
                logo={require("../../images/sponsors/alertfive.png")}
                name="Alert Five"
              />
              <Logo
                url="http://razorx2.com/"
                logo={require("../../images/sponsors/razorx2.png")}
                name="RazorX2"
              />
              <Logo
                url="https://www.thinkfun.com"
                logo={require("../../images/sponsors/thinkfun.png")}
                name="ThinkFun"
              />
              <Logo
                url="http://spontit.io"
                logo={require("../../images/sponsors/spontit.png")}
                name="Spontit"
              />
            </div>
            <p className="large">
              Can't see our sponsors? Try disabling ad block for this page.
            </p>
            <h1 className="section-title">Partners</h1>
            <div className="partner-container">
              <Logo url="http://mlh.io" logo={require('../../images/partners/mlh.png')} name="Major League Hacking"/>
              <Logo
                url="https://www.tjpartnershipfund.org"
                logo={require("../../images/partners/tjpartnershipfund.jpg")}
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
  }
}

export default Sponsors;

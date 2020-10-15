import { Link } from "react-router-dom";

import Logo from "./Logo";

import "./index.css";

const Sponsors = (): JSX.Element => (
  <>
    <a className="anchor" id="sponsor" href="#sponsor">
      Sponsors
    </a>
    <section id="sponsors">
      <div className="container">
        {/* <div
         className="vertical-segment green"
         style={{
           borderLeft: "6px solid #33cccc",
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
           borderLeft: "6px solid #33cccc",
           left: "-10.6%",
           top: "-0.6%",
           height: "100.6"
         }}
        ></div> */}
        <h1 className="section-title">Sponsors</h1>

        {/* Platinum Tier */}
        <h2 className="tier-title">PLATINUM</h2>
        <div className="partner-container">
          {[
            {
              url: "https://eastbanctech.com",
              logo: "eastbanc.png",
              name: "EastBanc Technologies",
            },
          ].map((company) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Gold Tier */}
        <h2 className="tier-title">GOLD</h2>
        <div className="partner-container">
          {[
            {
              url: "https://aws.amazon.com/",
              logo: "aws.png",
              name: "Amazon Web Services",
            },
          ].map((company) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Silver Tier */}
        <h2 className="tier-title">SILVER</h2>
        <div className="partner-container">
          {[
            {
              url: "https://www.yext.com",
              logo: "yext.png",
              name: "Yext",
            },
            {
              url: "https://www.ensco.com",
              logo: "ensco.png",
              name: "Ensco",
            },
            {
              url: "https://cloudwaveinc.com/",
              logo: "cloudwave.png",
              name: "CloudWave",
            },
            {
              url: "https://www.citadelsecurities.com/",
              logo: "citadelsecurities.png",
              name: "Citadel Securities",
            },
          ].map((company) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Bronze Tier */}
        <h2 className="tier-title">BRONZE</h2>
        <div className="partner-container">
          {[
            {
              url: "https://phone2action.com",
              logo: "phone2action.png",
              name: "Phone2Action",
            },
            {
              url: "https://www.tensorflow.org/",
              logo: "tensorflow.png",
              name: "TensorFlow",
            },
            {
              url: "https://www.wolfram.com",
              logo: "wolfram.png",
              name: "Wolfram",
            },
            {
              url: "https://www.collinsaerospace.com",
              logo: "collinsaerospace.png",
              name: "Collins Aerospace",
            },
            {
              url: "https://www.alertfive.io",
              logo: "alertfive.png",
              name: "Alert Five",
            },
            {
              url: "http://razorx2.com",
              logo: "razorx2.png",
              name: "RazorX2",
            },
            {
              url: "https://www.verizonmedia.com/",
              logo: "verizonmedia.png",
              name: "Verizon Media",
            },
            {
              url: "https://www.primamedicine.com",
              logo: "primamedicine.png",
              name: "Prima Medicine",
            },
            {
              url: "https://www.digitalocean.com",
              logo: "digitalocean.png",
              name: "DigitalOcean",
            },
          ].map((company) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>

        {/* Prize Tier */}
        <h2 className="tier-title">PRIZE</h2>
        <div className="partner-container">
          {[
            {
              url: "https://www.thinkfun.com",
              logo: "thinkfun.png",
              name: "ThinkFun",
            },
            {
              url: "http://spontit.io",
              logo: "spontit.png",
              name: "Spontit",
            },
            {
              url: "https://ultrapress.com",
              logo: "ultrapress.png",
              name: "UltraPress",
            },
            {
              url: "https://www.usehawkeye.com",
              logo: "hawkeye.png",
              name: "Hawkeye",
            },
            {
              url: "https://stackoverflow.com",
              logo: "stackoverflow.png",
              name: "StackOverflow",
            },
            {
              url: "http://hackp.ac/mlh-stickermule-hackathons",
              logo: "stickermule.png",
              name: "Sticker Mule",
            },
          ].map((company) => (
            <Logo
              name={company.name}
              url={company.url}
              logo={company.logo}
              key={company.name}
            />
          ))}
        </div>
        <p className="large">
          Can&#39;t see our sponsors? Try disabling ad block for this page.
        </p>
        <div className="partner-container">
          {[
            {
              url: "https://mlh.io",
              logo: "mlh.png",
              name: "Major League Hacking",
            },
            {
              url: "https://www.cvent.com",
              logo: "cvent.png",
              name: "Cvent",
            },
            {
              url: "https://www.tjpartnershipfund.org",
              logo: "tjpartnershipfund.png",
              name: "TJ Partnership Fund",
            },
          ].map((partner) => (
            <Logo
              name={partner.name}
              url={partner.url}
              logo={partner.logo}
              key={partner.name}
            />
          ))}
        </div>
        <p className="large">
          Interested in sponsoring? Check out our{" "}
          <Link
            to="sponsorship7.5.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            7.5 sponsorship packet
          </Link>{" "}
          and{" "}
          <Link
            to="sponsorship8.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            8.0 sponsorship packet
          </Link>
          . Please email us at{" "}
          <a href="mailto:sponsor@hacktj.org">sponsor@hacktj.org</a> if
          you&#39;re interested or have any questions!
        </p>
      </div>
    </section>
  </>
);

export default Sponsors;

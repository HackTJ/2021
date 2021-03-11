import { h, FunctionalComponent } from "preact";

import Logo from "./Logo";
import styles from "./sponsors.module.css";

const Sponsors: FunctionalComponent = () => (
  <>
    <a className="anchor" id="sponsor" href="#sponsor">
      Sponsors
    </a>
    <section id="sponsors">
      <div className="container">
        {/* <div
         className="vertical-segment colored"
         style={{
           borderLeft: "6px solid var(--theme-primary)",
           height: "3%",
           position: "absolute",
           left: "auto",
           right: "-14.3%",
           top: "-3.45%"
         }}
        ></div>
        <div
         className="horizontal-segment colored"
         style={{ width: "125%", top: "-0.7%", right: "-14.4%" }}
        ></div>
        <div
         className="vertical-segment colored"
         style={{
           borderLeft: "6px solid #64d861",
           left: "-10.6%",
           top: "-0.6%",
           height: "100.6"
         }}
        ></div> */}
        <h1 className="section-title">Sponsors</h1>

        {/* Platinum Tier */}
        <h2 className={styles.tierTitle}>Platinum</h2>
        <div className={styles.tierLogos}>
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
        <h2 className={styles.tierTitle}>Gold</h2>
        <div className={styles.tierLogos}>
          {[
            {
              url: "https://phone2action.com/",
              logo: "phone2action.png",
              name: "Phone2Action",
            },
            {
              url: "https://www.elliotttechnologies.aero/",
              logo: "elliott.png",
              name: "Elliott Technologies",
            },
            {
              url: "https://repl.it/",
              logo: "replit.png",
              name: "Repl.it",
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
        <h2 className={styles.tierTitle}>Silver</h2>
        <div className={styles.tierLogos}>
          {[
            {
              url: "/sponsorship8.0.pdf",
              logo: "temporary.png",
              name: "Sponsor",
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
        <h2 className={styles.tierTitle}>Bronze</h2>
        <div className={styles.tierLogos}>
          {[
            {
              url: "https://www.cvent.com",
              logo: "cvent.png",
              name: "Cvent",
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
        <h2 className={styles.tierTitle}>Prize</h2>
        <div className={styles.tierLogos}>
          {[
            {
              url: "https://www.echoar.xyz/",
              logo: "echoar.png",
              name: "EchoAR",
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
        <h1 className={styles.tierTitle}>Partners</h1>
        <div className={styles.tierLogos}>
          {[
            {
              url: "https://mlh.io",
              logo: "mlh.png",
              name: "Major League Hacking",
            },
            {
              url: "https://www.tjpartnershipfund.org",
              logo: "tjpartnershipfund.png",
              name: "TJ Partnership Fund",
            },
            {
              url: "https://www.brandmakers.com/",
              logo: "brandmakers.png",
              name: "Brand Makers",
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
          <a
            href="sponsorship7.5.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            7.5 sponsorship packet
          </a>{" "}
          and{" "}
          <a
            href="sponsorship8.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            8.0 sponsorship packet
          </a>
          . Please email us at{" "}
          <a href="mailto:sponsor@hacktj.org">sponsor@hacktj.org</a> if
          you&#39;re interested or have any questions!
        </p>
      </div>
    </section>
  </>
);

export default Sponsors;

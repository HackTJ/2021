import * as React from "react";

import SocialLinks from "./SocialLinks";
// import MLHTrustBadge from "./MLHTrustBadge";

const Footer = (): JSX.Element => (
  <>
    <section className="green register footer">
      <div className="container">
        <div className="register-button-block-old bottom">
          <div className="register-text">
            Be sure to follow our Social Media pages for updates!
          </div>
        </div>
        <SocialLinks />
      </div>
    </section>
    {/* <MLHTrustBadge /> */}
  </>
);

export default Footer;

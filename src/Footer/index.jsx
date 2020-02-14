import React from "react";

import SocialLinks from "./SocialLinks";

import "./index.css";

const Footer = () => (
  <section className="green register footer">
    <div className="container">
      <div className="register-button-block-old bottom">
        <div className="register-text">
          Be sure to follow our Social Media pages for updates!
        </div>
      </div>
      <SocialLinks includeHackTJLogo={false} />
    </div>
  </section>
);

export default Footer;

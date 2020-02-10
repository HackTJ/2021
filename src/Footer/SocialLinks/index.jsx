import React, { Component } from "react";
import "./index.css";

function hidden(text) {
  return <span style={{ visibility: "hidden" }}>{text}</span>;
}

class SocialLinks extends Component {
  render() {
    const twitter = (
      <a
        className="social pe-so-twitter"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/HackTJOfficial"
      >{hidden("Twitter")}</a>
    );
    const facebook = (
      <a
        className="social pe-so-facebook empty"
        target="_blank"
        rel="noopener noreferrer"
        href="https://facebook.com/HackTJOfficial"
      >
        {hidden("Facebook")}
      </a>
    );
    const instagram = (
      <a
        className="social pe-so-instagram empty"
        target="_blank"
        rel="noopener noreferrer"
        href="https://instagram.com/hacktjofficial"
      >
        {hidden("Instagram")}
      </a>
    );
    if (this.props.includeHackTJLogo) {
      return (
        <div className="social-links">
          <div className="social-group">
            {twitter}
            {facebook}
            {instagram}
            <a
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://hacktj.org"
            >
              <img
                className="social logo"
                style={{
                  width: "60px",
                  height: "37px"
                }}
                src={require("../../images/logo-black.png")}
                alt="HackTJ"
              />
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="social-links">
          {twitter}
          {facebook}
          {instagram}
        </div>
      );
    }
  }
}

export default SocialLinks;

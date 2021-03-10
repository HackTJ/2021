import { h, FunctionalComponent } from "preact";

import "./index.css";

const SocialLinks: FunctionalComponent = () => (
  <div className="social-links">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://twitter.com/HackTJOfficial"
      aria-label="Twitter"
    >
      <span className="social pe-so-twitter" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://facebook.com/HackTJOfficial"
      aria-label="Facebook"
    >
      <span className="social pe-so-facebook empty" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://instagram.com/hacktjofficial"
      aria-label="Instagram"
    >
      <span className="social pe-so-instagram empty" />
    </a>
  </div>
);

export default SocialLinks;

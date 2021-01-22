import type { FunctionComponent } from "react";

import data from "./questions";

import FAQuestion from "./FAQuestion";

import "./index.css";

const Questions: FunctionComponent = (): JSX.Element => (
  <>
    <a className="anchor" id="faq" href="#faq">
      FAQ
    </a>
    <section className="colored faq">
      <h1 className="section-title">FAQ</h1>
      <div className="faq-wrapper">
        <FAQuestion data={data.slice(0, data.length / 2)} />
        <FAQuestion data={data.slice(data.length / 2)} />
      </div>
      <p className="large bottom-question">
        If your question is not answered here, just ask us:{" "}
        <a
          href="mailto:hello@hacktj.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello@hacktj.org
        </a>
        .
      </p>
    </section>
  </>
);

export default Questions;

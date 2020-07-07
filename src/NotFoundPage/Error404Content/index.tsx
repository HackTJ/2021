import React from "react";

const Error404Content = (): JSX.Element => (
  <>
    <a className="anchor" id="notfound" href="#notfound">
      Page Not Found
    </a>
    <section id="notfound">
      <div className="container">
        <div className="animation-container vertical top right extra-right extra-height">
          <div className="animated" />
        </div>
        <h1 className="section-title" style={{ marginTop: "20vh" }}>
          Error 404
        </h1>
        <p className="large" style={{ textAlign: "center" }}>
          We couldn&#39;t find that page, sorry.
        </p>
      </div>
    </section>
  </>
);

export default Error404Content;

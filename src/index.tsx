import { StrictMode } from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import reportWebVitals from "./reportWebVitals";

// Redirect to /2021:
// window.location.href = "https://hacktj.org/2021";

// Start Single Page Apps for GitHub Pages
// Single Page Apps for GitHub Pages
// https://github.com/rafrex/spa-github-pages
// Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
// ----------------------------------------------------------------------
// This script checks to see if a redirect is present in the query string
// and converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
((l) => {
  if (l.search) {
    const q: { [param: string]: string } = {};
    l.search
      .slice(1)
      .split("&")
      .forEach((v) => {
        const a: string[] = v.split("=");
        q[a[0]] = a.slice(1).join("=").replace(/~and~/g, "&");
      });
    if (q.p !== undefined) {
      window.history.replaceState(
        null,
        null || "",
        l.pathname.slice(0, -1) + (q.p || "") + (q.q ? `?${q.q}` : "") + l.hash
      );
    }
  }
})(window.location);
// End Single Page Apps for GitHub Pages

const rootElement = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
if (rootElement?.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

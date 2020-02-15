import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RegistrationPage = lazy(() => import("./RegistrationPage"));
const HistoryPage = lazy(() => import("./HistoryPage"));
const MainPage = lazy(() => import("./MainPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const App = () => {
  return (
    <Router basename="/2020">
      <Suspense
        fallback={
          <div
            style={{
              margin: "auto",
              marginLeft: "calc(50vw - 300px/2)",
              marginTop: "calc(50vh - 300px/2)"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 34 34"
              className="progress"
            >
              <circle
                cx="16"
                cy="16"
                r="16"
                style={{
                  fill: "none",
                  stroke: "rgba(101, 216, 97, 0.2)",
                  strokeWidth: 1.8
                }}
              />

              <circle
                cx="16"
                cy="16"
                r="16"
                style={{
                  fill: "none",
                  stroke: "rgba(101, 216, 97, 0.8)",
                  strokeDasharray: "100 100",
                  strokeDashoffset: 70,
                  strokeLinecap: "round",
                  strokeWidth: 1.8,
                  WebkitTransition: "stroke-dashoffset 1s ease-in-out",
                  transition: "stroke-dashoffset 1s ease-in-out"
                }}
              />
            </svg>
          </div>
        }
      >
        <Switch>
          <Route exact path="/registration" component={RegistrationPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/" component={MainPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

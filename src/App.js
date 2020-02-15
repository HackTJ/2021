import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndeterminateLoadingIndicator from "./IndeterminateLoadingIndicator";
const RegistrationPage = lazy(() => import("./RegistrationPage"));
const HistoryPage = lazy(() => import("./HistoryPage"));
const MainPage = lazy(() => import("./MainPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const App = () => (
  <Router basename="/2020">
    <Suspense fallback=<IndeterminateLoadingIndicator />>
      <Switch>
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/history" component={HistoryPage} />
        <Route exact path="/" component={MainPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  </Router>
);
export default App;

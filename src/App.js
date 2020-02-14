import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RegistrationPage from "./RegistrationPage";
import HistoryPage from "./HistoryPage";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";

const App = () => (
  <Router basename="/2020">
    <Switch>
      <Route exact path="/registration">
        <RegistrationPage />
      </Route>
      <Route exact path="/history">
        <HistoryPage />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  </Router>
);

export default App;

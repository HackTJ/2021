import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import HistoryPage from "./HistoryPage";
import NotFoundPage from "./NotFoundPage";

function App() {
  return (
    <Router>
      <Switch>
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
}

export default App;

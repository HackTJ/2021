// @flow
import React, { Suspense, lazy } from 'react';
import type { StatelessFunctionalComponent, Element } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import IndeterminateLoadingIndicator from './IndeterminateLoadingIndicator';
import PageScrollProgress from './PageScrollProgress';
// const RegistrationPage = lazy(() => import("./RegistrationPage"));
const HistoryPage = lazy(() => import('./HistoryPage'));
const MainPage = lazy(() => import('./MainPage'));
const NotFoundPage = lazy(() => import('./NotFoundPage'));

const App: StatelessFunctionalComponent<{}> = (): Element<
  typeof React.StrictMode
> => (
  <React.StrictMode>
    <PageScrollProgress />
    <Router basename="/2021">
      <Suspense fallback={<IndeterminateLoadingIndicator />}>
        <Switch>
          {/* <Route exact path="/registration" component={RegistrationPage} /> */}
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/" component={MainPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>
);

export default App;

import React, { Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IndeterminateLoadingIndicator from "./IndeterminateLoadingIndicator";
import PageScrollProgress from "./PageScrollProgress";
// const RegistrationPage = lazy(() => import("./RegistrationPage"));
const HistoryPage = lazy(() => import("./HistoryPage"));
const MainPage = lazy(() => import("./MainPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const App = (): JSX.Element => (
  <>
    <PageScrollProgress />
    <Router>
      <Suspense fallback={<IndeterminateLoadingIndicator />}>
        <Routes basename="/2020v2">
          {/* <Route path="/registration" element={<RegistrationPage />} /> */}
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  </>
);

export default App;

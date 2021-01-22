import { Suspense, lazy } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Footer";

import IndeterminateLoadingIndicator from "./IndeterminateLoadingIndicator";
import PageScrollProgress from "./PageScrollProgress";
const RegistrationPage = lazy(() => import("./RegistrationPage"));
const HistoryPage = lazy(() => import("./HistoryPage"));
const MainPage = lazy(() => import("./MainPage"));
const NotFoundPage = lazy(() => import("./NotFoundPage"));

const App = () => (
  <>
    <PageScrollProgress />
    <Router>
      <Suspense fallback={<IndeterminateLoadingIndicator />}>
        <main className="App">
          <Routes basename="/2021">
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </Router>
  </>
);

export default App;

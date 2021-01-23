import loadable from "@loadable/component";
import { memo } from "react";
import type { ComponentType, ComponentProps } from "react";
import { PrerenderedComponent } from "react-prerendered-component";

import PageScrollProgress from "./PageScrollProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import IndeterminateLoadingIndicator from "./IndeterminateLoadingIndicator";
import Footer from "./Footer";

const prerenderedLoadable = (
  dynamicImport: () => Promise<{ default: ComponentType<any> }>
) => {
  const LoadableComponent = loadable(dynamicImport);
  return memo((props: ComponentProps<any>) => (
    <PrerenderedComponent live={LoadableComponent.preload()}>
      <LoadableComponent {...props} />
    </PrerenderedComponent>
  ));
};
const RegistrationPage = prerenderedLoadable(
  () => import("./RegistrationPage")
);
const HistoryPage = prerenderedLoadable(() => import("./HistoryPage"));
const MainPage = prerenderedLoadable(() => import("./MainPage"));
const NotFoundPage = prerenderedLoadable(() => import("./NotFoundPage"));

const App = () => (
  <>
    <PageScrollProgress />
    <BrowserRouter>
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
    </BrowserRouter>
  </>
);

export default App;

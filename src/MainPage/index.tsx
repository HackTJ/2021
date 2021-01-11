import { lazy, Suspense } from "react";

import IndeterminateLoadingIndicator from "../IndeterminateLoadingIndicator";

const Landing = lazy(() => import("./Landing"));
const NavigationBar = lazy(() => import("../NavigationBar"));
const Intro = lazy(() => import("./Intro"));
// const RegistrationInfo = React.lazy(() => import("./RegistrationInfo"));
// const RegistrationChoice = React.lazy(() => import("../RegistrationChoice"));
const Questions = lazy(() => import("./Questions"));
const Sponsors = lazy(() => import("./Sponsors"));
// const Statistics = React.lazy(() => import("./Statistics"));
const Schedule = lazy(() => import("./Schedule"));
const Team = lazy(() => import("./Team"));
// const VenueMap = React.lazy(() => import("./VenueMap"));
const Footer = lazy(() => import("../Footer"));

const MainPage = (): JSX.Element => (
  <span className="App">
    <Suspense fallback={<IndeterminateLoadingIndicator />}>
      <Landing />
      <NavigationBar />
      <Intro />
      {/* <RegistrationInfo />
      {/*<RegistrationChoice /> */}
      <Questions />
      <Sponsors />
      {/* <Statistics /> */}
      <Schedule />
      <Team />
      {/* <VenueMap /> */}
      <Footer />
    </Suspense>
  </span>
);

export default MainPage;

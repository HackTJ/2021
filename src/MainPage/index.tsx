import * as React from "react";

import IndeterminateLoadingIndicator from "../IndeterminateLoadingIndicator";
const Landing = React.lazy(() => import("./Landing"));
const NavigationBar = React.lazy(() => import("../NavigationBar"));
const Intro = React.lazy(() => import("./Intro"));
// const RegistrationInfo = React.lazy(() => import("./RegistrationInfo"));
// const RegistrationChoice = React.lazy(() => import("../RegistrationChoice"));
const Questions = React.lazy(() => import("./Questions"));
const Sponsors = React.lazy(() => import("./Sponsors"));
// const Statistics = React.lazy(() => import("./Statistics"));
const Schedule = React.lazy(() => import("./Schedule"));
const Team = React.lazy(() => import("./Team"));
// const VenueMap = React.lazy(() => import("./VenueMap"));
const Footer = React.lazy(() => import("../Footer"));

const MainPage = () => (
  <span className="App">
    <React.Suspense fallback={<IndeterminateLoadingIndicator />}>
      <Landing />
      <NavigationBar />
      <Intro />
      {/*<RegistrationInfo />
      {/*<RegistrationChoice />*/}
      <Questions />
      <Sponsors />
      {/*<Statistics />*/}
      <Schedule />
      <Team />
      {/*<VenueMap />*/}
      <Footer />
    </React.Suspense>
  </span>
);

export default MainPage;

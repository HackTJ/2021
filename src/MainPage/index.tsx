import Landing from "./Landing";
import NavigationBar from "../NavigationBar";
import Intro from "./Intro";
import RegistrationInfo from "./RegistrationInfo";
import RegistrationChoice from "../RegistrationChoice";
import Questions from "./Questions";
import Sponsors from "./Sponsors";
// import Statistics from "./Statistics";
import Schedule from "./Schedule";
import Team from "./Team";
// import VenueMap from "./VenueMap";

import config from "../config";

import { DateTime } from "luxon";

const MainPage = () => {
  const today = DateTime.now();
  const oneWeekAfter = today.plus({ days: 7 });

  const showRegistrationInfo = oneWeekAfter >= config.registration.start;
  return (
    <>
      <Landing />
      <NavigationBar />
      <Intro />
      {showRegistrationInfo && (
        <>
          <RegistrationInfo />
          <RegistrationChoice />
        </>
      )}
      <Questions />
      <Sponsors />
      {/* <Statistics /> */}
      <Schedule />
      <Team />
      {/* <VenueMap /> */}
    </>
  );
};

export default MainPage;

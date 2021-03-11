import { FunctionalComponent, h } from "preact";
import dayjs from "dayjs";

import Landing from "../../components/content/landing";
import NavigationBar from "../../components/navbar";
import Intro from "../../components/content/intro";
import RegistrationInfo from "../../components/content/registration-info";
import RegistrationChoice from "../../components/content/registration";
import Questions from "../../components/content/questions";
import Sponsors from "../../components/content/sponsors";
// import Statistics from "../../components/content/statistics";
import Schedule from "../../components/content/schedule";
import Team from "../../components/content/team";
// import VenueMap from "../../components/content/venue-map";

import config from "../../config";

const MainPage: FunctionalComponent = () => {
  const today = dayjs();
  const oneWeekAfter = today.add(7, "day");

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

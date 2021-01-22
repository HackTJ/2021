import Landing from "./Landing";
import NavigationBar from "../NavigationBar";
import Intro from "./Intro";
// import RegistrationInfo from "./RegistrationInfo";
// import RegistrationChoice from "./RegistrationChoice";
import Questions from "./Questions";
import Sponsors from "./Sponsors";
// import Statistics from "./Statistics";
import Schedule from "./Schedule";
import Team from "./Team";
// import VenueMap from "./VenueMap";

const MainPage = () => (
  <>
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
  </>
);

export default MainPage;

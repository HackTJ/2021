import { h, FunctionalComponent } from "preact";

import NavigationBar from "../../components/navbar";
import RegistrationChoice from "../../components/content/registration";

const RegistrationPage: FunctionalComponent = () => (
  <>
    <NavigationBar />
    <RegistrationChoice />
  </>
);

export default RegistrationPage;

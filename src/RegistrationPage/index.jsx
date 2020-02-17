// @flow
import React, { Fragment } from "react";
import type { StatelessFunctionalComponent, Element } from "react";

import NavigationBar from "../NavigationBar";
import RegistrationChoice from "../RegistrationChoice";
import Footer from "../Footer";

const RegistrationPage: StatelessFunctionalComponent<{}> = (): Element<
  typeof Fragment
> => (
  <>
    <NavigationBar />
    <RegistrationChoice />
    <Footer />
  </>
);

export default RegistrationPage;

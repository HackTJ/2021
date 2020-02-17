// @flow
import React, { Fragment } from "react";
import type { StatelessFunctionalComponent, Element } from "react";

import NavigationBar from "../NavigationBar";
import Error404Content from "./Error404Content";
import Footer from "../Footer";

const NotFoundPage: StatelessFunctionalComponent<{}> = (): Element<
  typeof Fragment
> => (
  <>
    <NavigationBar />
    <Error404Content />
    <Footer />
  </>
);

export default NotFoundPage;

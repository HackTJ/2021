// @flow
import * as React from "react";

import NavigationBar from "../NavigationBar";
import Content from "./Content";
import Footer from "../Footer";

const HistoryPage: React.StatelessFunctionalComponent<{}> = (): React.Element<
  typeof React.Fragment
> => (
  <>
    <NavigationBar />
    <Content />
    <Footer />
  </>
);

export default HistoryPage;

import React from "react";

import NavigationBar from "../NavigationBar";
import Error404Content from "./Error404Content";
import Footer from "../Footer";

const NotFoundPage = (): JSX.Element => (
  <>
    <NavigationBar />
    <Error404Content />
    <Footer />
  </>
);

export default NotFoundPage;

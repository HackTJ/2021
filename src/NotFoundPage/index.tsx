import { Helmet } from "react-helmet-async";
import NavigationBar from "../NavigationBar";
import Error404Content from "./Error404Content";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>{document.title} - Error 404</title>
      </Helmet>
      <NavigationBar />
      <Error404Content />
    </>
  );
};

export default NotFoundPage;

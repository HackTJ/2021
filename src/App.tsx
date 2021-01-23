import PageScrollProgress from "./PageScrollProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

import RegistrationPage from "./RegistrationPage";
import HistoryPage from "./HistoryPage";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";

const App = () => (
  <>
    <PageScrollProgress />
    <BrowserRouter>
      <Routes basename="/2021">
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);

export default App;

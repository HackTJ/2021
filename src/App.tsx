import config from "./config";

import PageScrollProgress from "./PageScrollProgress";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

import RegistrationPage from "./RegistrationPage";
import HistoryPage from "./HistoryPage";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";

import styles from "./App.module.css";

const App = () => {
  const currentTime = new Date();

  const registrationIsOpen =
    config.registration.startDate <= currentTime &&
    currentTime < config.event.startDate;
  return (
    <div className={styles.content}>
      <div>
        <PageScrollProgress />
        <BrowserRouter>
          <Routes basename="/2021">
            {registrationIsOpen && (
              <Route path="/registration" element={<RegistrationPage />} />
            )}
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default App;

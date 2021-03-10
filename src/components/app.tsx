import { FunctionalComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import PageScrollProgress from "./scroll-progress";
import MainPage from '../routes/index';
import HistoryPage from '../routes/history';
import RegistrationPage from '../routes/registration';
import NotFoundPage from '../routes/notfound';
import Footer from "../components/footer";

const App: FunctionalComponent = () => {
    return (
        <div id="app">
            <PageScrollProgress />
            <Router>
                <Route path="/" component={MainPage} />
                <Route path="/history" component={HistoryPage} />
                <Route path="/registration" component={RegistrationPage} />
                <NotFoundPage default />
            </Router>
            <Footer />
        </div>
    );
};

export default App;

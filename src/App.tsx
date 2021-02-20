import PageScrollProgress from './PageScrollProgress';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

import RegistrationPage from './RegistrationPage';
import HistoryPage from './HistoryPage';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

import './App.css';

const App = () => (
    <div className='Content'>
        <div>
            <PageScrollProgress />
            <BrowserRouter>
                <Routes basename='/2021'>
                    <Route
                        path='/registration'
                        element={<RegistrationPage />}
                    />
                    <Route path='/history' element={<HistoryPage />} />
                    <Route path='/' element={<MainPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
        <div className="Footer">
            <Footer />
        </div>
    </div>
);

export default App;

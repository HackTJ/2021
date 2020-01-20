import React from 'react';
import {Router} from "@reach/router";
import MainPage from './MainPage';
import HistoryPage from './HistoryPage';
import NotFoundPage from './NotFoundPage';

function App() {
  // const baseUrl = process.env.PUBLIC_URL;
  return (<Router basepath="/2020">
    <MainPage path="/" exact={true}/>
    <HistoryPage path="history" exact={true}/>
    <NotFoundPage path="*" exact={true}/>
  </Router>);
}

export default App;

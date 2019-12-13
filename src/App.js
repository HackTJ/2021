import React from 'react';
import {Router} from "@reach/router";
import MainPage from './MainPage';
import HistoryPage from './HistoryPage';
import NotFoundPage from './NotFoundPage';

function App() {
  // const baseUrl = process.env.PUBLIC_URL;
  return (<Router>
    <MainPage path="/" exact={true}/>
    <HistoryPage path="history"/>
    <NotFoundPage path="*" exact={true}/>
  </Router>);
}

export default App;

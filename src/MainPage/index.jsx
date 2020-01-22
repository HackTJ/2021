import React from 'react';

import Landing from './Landing';
import NavigationBar from './NavigationBar';
import Intro from './Intro';
// import Registration from './Registration';
import Questions from './Questions';
import Sponsors from './Sponsors';
import Schedule from './Schedule';
import Team from './Team';
import VenueMap from './VenueMap';
import Footer from '../Footer';

import '../index.css';

function MainPage() {
  return (<span className="App">
    <Landing/>
    <NavigationBar/>
    <Intro/>
    {/*<Registration/>*/}
    <Questions/>
    <Sponsors/>
    <Schedule/>
    <Team/>
    <VenueMap/>
    <Footer/>
  </span>);
}

export default MainPage;

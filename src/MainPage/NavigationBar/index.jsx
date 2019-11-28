import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';

class NavigationBar extends Component {
  render() {
    {/* TODO: style attribute in Navbar makes Navbar inline but hides the logo */}
    return (<Navbar sticky="top" className='navcontainer' bg="#64d861" style={{
        position: 'sticky',
        top: '0px',
        display: "flex",
        flexDirection: "row",
        zIndex: 1000
      }}>
      <Navbar.Brand>
        <img src={require('../../images/bigweblogo.png')} style={{
            height: 50
          }} alt="HackTJ"/>
      </Navbar.Brand>
      <Nav className='nav justify-content-center'>
        <Nav.Link href="#intro">
          <h1>Intro</h1>
        </Nav.Link>
        <Nav.Link href="#faq">
          <h1>FAQ</h1>
        </Nav.Link>
        <Nav.Link href="#sponsor">
          <h1>Sponsors</h1>
        </Nav.Link>
        <Nav.Link href="#schedule">
          <h1>Schedule</h1>
        </Nav.Link>
        <Nav.Link href="#team">
          <h1>Team</h1>
        </Nav.Link>
        <Nav.Link href="#map">
          <h1>Map</h1>
        </Nav.Link>
      </Nav>
    </Navbar>);
  }
}

export default NavigationBar;

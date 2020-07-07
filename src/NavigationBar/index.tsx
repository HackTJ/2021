import * as React from "react";

import { Navbar, Nav, NavLink } from "reactstrap";

import "./index.css";

const NavigationBar = (): JSX.Element => (
  // TODO: get rid of <div style={{height: "50px"}} /> and use CSS instead
  <Navbar
    sticky="top"
    className="navcontainer"
    bg="#64d861"
    style={{
      position: "sticky",
      top: "0px",
      display: "flex",
      flexDirection: "row",
      zIndex: 1000,
    }}
  >
    <div style={{ height: "50px" }} />
    <Nav className="nav justify-content-center">
      <NavLink href="#intro">
        <h1>Intro</h1>
      </NavLink>
      <NavLink href="#faq">
        <h1>FAQ</h1>
      </NavLink>
      <NavLink href="#sponsor">
        <h1>Sponsors</h1>
      </NavLink>
      {/*
        <NavLink href="#demographics">
         <h1>Demographics</h1>
        </NavLink>
        */}
      <NavLink href="#schedule">
        <h1>Schedule</h1>
      </NavLink>
      <NavLink href="#team">
        <h1>Team</h1>
      </NavLink>
      {/*
        <NavLink href="#map">
         <h1>Map</h1>
        </NavLink>
        */}
    </Nav>
  </Navbar>
);

export default NavigationBar;

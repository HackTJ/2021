import { Navbar, Nav, NavLink } from "reactstrap";

import "./index.css";

const NavigationBar = (): JSX.Element => (
  <Navbar
    sticky="top"
    className="navcontainer"
    style={{
      position: "sticky",
      top: "0px",
      display: "flex",
      flexDirection: "row",
      zIndex: 1000,
      marginBottom: "100px",
    }}
  >
    <Nav className="nav justify-content-center">
      <NavLink href="#intro">Intro</NavLink>
      <NavLink href="#faq">FAQ</NavLink>
      <NavLink href="#sponsor">Sponsors</NavLink>
      {/*
        <NavLink href="#demographics">
         Demographics
        </NavLink>
        */}
      <NavLink href="#schedule">Schedule</NavLink>
      <NavLink href="#team">Team</NavLink>
      {/*
        <NavLink href="#map">
         Map
        </NavLink>
        */}
    </Nav>
  </Navbar>
);

export default NavigationBar;

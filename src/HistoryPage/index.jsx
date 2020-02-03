import React, { Component } from "react";
import "../index.css";
import NavigationBar from "../NavigationBar";
import Content from "./Content";
import Footer from "../Footer";

class HistoryPage extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Content />
        <Footer />
      </>
    );
  }
}

export default HistoryPage;

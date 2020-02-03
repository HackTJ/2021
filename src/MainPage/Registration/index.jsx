import React, { Component } from "react";
import "./index.css";

class Registration extends Component {
  render() {
    return (
      <>
        <a className="anchor" id="registration"></a>
        <section className="registration-info">
          <div className="container">
            <div
              className="animation-container vertical left top extra-height"
              id="trigger"
            >
              <div className="animated"></div>
            </div>
            <h1 className="section-title">Registration Info</h1>
            <p className="large">
              Registration opens on February 10 and closes on February 24!
            </p>
            <p className="large">
              When you register you&apos;ll be asked for several forms. If you
              want to be able to submit your registration quickly, fill them out
              in advance. The required forms are the{" "}
              <a href={process.env.PUBLIC_URL + "/forms/ecc.pdf"}>
                Emergency Care Form
              </a>
              ,{" "}
              <a href={process.env.PUBLIC_URL + "/forms/field_trip.pdf"}>
                Field Trip Form
              </a>
              , and the Cvent Visitor and Publicity waiver (see the links
              below). If you are under 18 years old, fill out the{" "}
              <a
                href={process.env.PUBLIC_URL + "/forms/cvent_minor_waiver.pdf"}
              >
                form for minors
              </a>
              , and if you are over 18 years old, fill out the{" "}
              <a
                href={process.env.PUBLIC_URL + "/forms/cvent_adult_waiver.pdf"}
              >
                form for adults
              </a>
              . Remember, HackTJ is only open to current high school students!
            </p>
            <p className="large">
              When registering you'll also have the option to upload a
              r&eacute;sum&eacute;, which would be given to certain sponsors
              looking to recruit hackers. You will also have a chance to submit
              your r&eacute;sum&eacute; after you register if you are not ready
              to upload it now.
            </p>
            <p className="large">
              Please note that registering alone does not guarantee you will
              receive a ticket. Admission decisions will be made based on a
              variety of factors including the date/time you register, so make
              sure to sign up quickly! Admission decisions will be sent out on
              March 2.
            </p>
            <div className="register-button-block-old top">
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + "/forms/field_trip.pdf"}
              >
                Field Trip Form
              </a>
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + "/forms/ecc.pdf"}
              >
                Emergency Care Form
              </a>
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + "/forms/cvent_minor_waiver.pdf"}
              >
                Cvent Waiver (for minors)
              </a>
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + "/forms/cvent_adult_waiver.pdf"}
              >
                Cvent Waiver (for adults)
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Registration;

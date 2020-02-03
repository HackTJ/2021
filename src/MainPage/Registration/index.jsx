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
              Registration opens on February 18 at 8pm and closes on March 4 at
              8pm!
            </p>
            <p className="large">
              When you register you&apos;ll be asked for several forms. If you
              want to be able to submit your registration quickly, fill them out
              in advance (Emergency Care Form & Field Trip Form, links below).
            </p>
            <p className="large">
              When you register we’ll give you the option to upload a
              r&eacute;sum&eacute;, which would be given to certain sponsors
              looking to recruit hackers. You will also have a chance to submit
              your resumé after you register if you are not ready to upload it
              now.
            </p>
            <p className="large">
              Please note that registering alone does not guarantee you will
              receive a ticket. Admission decisions will be made based on a
              variety of factors including the date/time you register, so make
              sure to sign up quickly! Admission decisions will be sent out on
              March 11th.
            </p>
            <div className="register-button-block-old top">
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + '/forms/HackTJ2020-Field-Trip.pdf'}
              >
                Field Trip Form
              </a>
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + '/forms/HackTJ2020-ECC.pdf'}
              >
                Emergency Care Form
              </a>
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + '/forms/HackTJ2020-Cvent-Waiver-Minors.docx'}
              >
                Cvent Waiver (for minors under 18 years old)
              </a>
              <a
                className="flatbutton register-button"
                href={process.env.PUBLIC_URL + '/forms/HackTJ2020-Cvent-Waiver.docx'}
              >
                Cvent Waiver (for adults at least 18 years old)
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Registration;

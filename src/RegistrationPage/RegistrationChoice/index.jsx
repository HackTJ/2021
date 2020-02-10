import React, { Component } from "react";

class RegistrationChoice extends Component {
  render() {
    return (
      <>
        <a className="anchor" id="register">
          Register
        </a>
        <section id="register">
          <div className="container">
            <div className="animation-container vertical top right extra-right extra-height">
              <div className="animated"></div>
            </div>
            <h1 className="section-title">Register</h1>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)"
              }}
            >
              <a
                className="flatbutton"
                style={{ width: "60%" }}
                href="https://hacktj.typeform.com/to/VRfmTH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text">Participants</div>
              </a>
              <a
                className="flatbutton"
                style={{ width: "60%" }}
                href="https://www.google.com/maps/dir//Cvent+HQ,+1765+Greensboro+Station+Pl,+McLean,+VA+22102/@38.9229121,-77.3033695,12z/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text">Judges</div>
              </a>
              <a
                className="flatbutton"
                style={{ width: "60%" }}
                href="https://www.google.com/maps/dir//Cvent+HQ,+1765+Greensboro+Station+Pl,+McLean,+VA+22102/@38.9229121,-77.3033695,12z/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text">Mentors</div>
              </a>
              <a
                className="flatbutton"
                style={{ width: "60%" }}
                href="https://www.signupgenius.com/go/904094fabac2ea0f58-hacktj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text">Volunteers</div>
              </a>
            </div>
            <br />
            <p className="large">
              Participants must be current high school students. Computer
              science and engineering experience is not necessary, as we'll have
              workshops and mentors so you can learn. Please note that
              registering alone does not guarantee you will receive a ticket.
              Admission decisions will be made based on a variety of factors
              including the date/time you register, so make sure to sign up
              quickly!
            </p>
            <br />
            <p className="large">
              Judges must be present during the entire judging process (9:30
              a.m. to 11:30 a.m. on Sunday), but not necessarily during the
              entire hackathon. Computer science and engineering experience is
              preferred but not required.
            </p>
            <br />
            <p className="large">
              Mentors help students if they have any technical questions, and
              don't have to be present at HackTJ the entire time. Computer
              science and engineering experience is required.
            </p>
            <br />
            <p className="large">
              Volunteers help our team with logistical tasks such as check-in,
              food service, and chaperoning. No experience is necessary to be a
              volunteer.
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default RegistrationChoice;

import React from "react";

import "./index.css";

const RegistrationChoice = (): JSX.Element => (
  <>
    <a className="anchor" id="register">
      Register
    </a>
    <section id="register">
      <div
        className="container"
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          margin: "auto",
        }}
      >
        {/* <div
         className="vertical-segment green"
         style={{ left: "-15%", top: "-14%", height: "123%" }}
        ></div> */}
        <h1 className="section-title">Register</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          {/* <a
           className="flatbutton"
           style={{ width: "80%" }}
           href="https://hacktj.typeform.com/to/VRfmTH"
           target="_blank"
           rel="noopener noreferrer"
          >
           <div className="text">Participants</div>
          </a> */}
          <a
            className="flatbutton long-label"
            style={{ width: "80%" }}
            href="https://hacktj.typeform.com/to/UoAWrS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text">Judges/Mentors</div>
          </a>
          <a
            className="flatbutton"
            style={{ width: "80%" }}
            href="https://www.signupgenius.com/go/904094fabac2ea0f58-hacktj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text">Volunteers</div>
          </a>
        </div>
        <br />
        <p className="large centered" style={{ textAlign: "center" }}>
          Registration for participants has closed. Mentors, judges, and
          volunteers should fill out the{" "}
          <a
            href={`${
              process.env.PUBLIC_URL || ""
            }/forms/cvent_adult_waiver.pdf`}
          >
            Cvent adult waiver
          </a>
          .
          {/* Participants must be current
          high school students. Computer science and engineering experience is
          not necessary, as we&#39;ll have workshops and mentors so you can learn.
          Please note that registering alone does not guarantee you will receive
          a ticket. Admission decisions will be made based on a variety of
          factors including the date/time you register, so make sure to sign up
          quickly! */}
        </p>
        <br />
        <p className="large centered">
          Judges must be present during the entire judging process (9:30 a.m. to
          11:30 a.m. on Sunday), but not necessarily during the entire
          hackathon. Computer science and engineering experience is preferred
          but not required.
        </p>
        <br />
        <p className="large centered">
          Mentors help students if they have any technical questions, and
          don&#39;t have to be present at HackTJ the entire time. Computer
          science and engineering experience is required.
        </p>
        <br />
        <p className="large centered">
          Volunteers help our team with logistical tasks such as check-in, food
          service, and chaperoning. No experience is necessary to be a
          volunteer. You can find more information on volunteer duties{" "}
          <a href="https://docs.google.com/document/d/1AkbyeWtjz7vnjeLcBmeaBtKUNlc8GOzB6rPXjRCcWjY/edit#heading=h.nv7qldxgyem">
            here
          </a>
          .
        </p>
        <br />
      </div>
    </section>
  </>
);

export default RegistrationChoice;

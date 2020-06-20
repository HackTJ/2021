// @flow
import React, { Fragment } from "react";
import type { StatelessFunctionalComponent, Element } from "react";

import "./index.css";

const RegistrationInfo: StatelessFunctionalComponent<{}> = (): Element<
  typeof Fragment
> => (
  <>
    <a className="anchor" id="registration">
      Registration Info
    </a>
    <section className="registration-info">
      <div className="container">
        {/*<div className="vertical-segment green"></div>*/}
        <h1 className="section-title">Registration Info</h1>
        <p className="large centered">
          Registration for participants opens on October 10 at 8 p.m. and
          closes on October 24!
        </p>
        <p className="large centered">
          When you register you&apos;ll be asked for several forms. If you want
          to be able to submit your registration quickly, fill them out in
          advance. The required forms are the{" "}
          <a href={(process.env.PUBLIC_URL || "") + "/forms/ecc.pdf"}>
            Emergency Care Form
          </a>
          ,{" "}
          <a href={(process.env.PUBLIC_URL || "") + "/forms/field_trip.pdf"}>
            Field Trip Form
          </a>
          , and the Cvent Visitor and Publicity waiver (see the links below). If
          you are under 18 years old, fill out the{" "}
          <a
            href={
              (process.env.PUBLIC_URL || "") + "/forms/cvent_minor_waiver.pdf"
            }
          >
            form for minors
          </a>
          , and if you are over 18 years old, fill out the{" "}
          <a
            href={
              (process.env.PUBLIC_URL || "") + "/forms/cvent_adult_waiver.pdf"
            }
          >
            form for adults
          </a>
          . Remember, HackTJ is only open to current high school students!
        </p>
        <div className="register-button-block-old top">
          {/*TODO: change from <a> to <Link>*/}
          <a
            className="flatbutton register-button"
            href={(process.env.PUBLIC_URL || "") + "/forms/field_trip.pdf"}
          >
            Field Trip Form
          </a>
          <a
            className="flatbutton register-button"
            href={(process.env.PUBLIC_URL || "") + "/forms/ecc.pdf"}
          >
            Emergency Care Form
          </a>
          {/*<a
            className="flatbutton register-button"
            href={
              (process.env.PUBLIC_URL || "") + "/forms/cvent_minor_waiver.pdf"
            }
          >
            Cvent Waiver (for minors)
          </a>*/}
          <a
            className="flatbutton register-button"
            href={
              (process.env.PUBLIC_URL || "") + "/forms/cvent_adult_waiver.pdf"
            }
          >
            Cvent Waiver (for adults)
          </a>
        </div>
        <p className="large centered">
          When registering you'll also have the option to upload a
          r&eacute;sum&eacute;, which would be given to certain sponsors looking
          to recruit hackers. You will also have a chance to submit your
          r&eacute;sum&eacute; after you register if you are not ready to upload
          it now.
        </p>
        <p className="large centered">
          Please note that registering alone does not guarantee you will receive
          a ticket. Tickets decisions will be made based on a variety of factors
          including the date/time you register, so make sure to sign up quickly!
          Tickets decisions will be sent out on March 2.
        </p>
      </div>
    </section>
  </>
);

export default RegistrationInfo;

import React from "react";

import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import FAQuestion from "./FAQuestion";

import "./index.css";

const Questions: React.FunctionComponent = (): JSX.Element => (
  <>
    <a className="anchor" id="faq" href="#faq">
      FAQ
    </a>
    <section className="green faq">
      <Container className="faq-container">
        {/* <div
        className="vertical-segment white"
        style={{ top: "-0.1%", left: "-0.52%", height: "2.8%" }}
        ></div>
        <div
        className="horizontal-segment white"
        style={{ left: "-0.52%", top: "2.7%" }}
        ></div> */}
        <h1 className="section-title">FAQ</h1>
        <div className="grid-container">
          <FAQuestion
            question="What is HackTJ?"
            answer={
              <span>
                HackTJ is a student-run hackathon where you will have 24 hours
                to learn how to code and/or work with your friends to make your
                idea come to life.
              </span>
            }
          />
          <FAQuestion
            question="When is HackTJ?"
            answer={
              <span>
                HackTJ will start on Saturday, April 24 and run until Sunday,
                April 25.
              </span>
            }
          />
          <FAQuestion
            question="Who can attend?"
            answer={
              <span>
                HackTJ is open to any and all current high school students. If
                you&apos;re not a high school student but would like to attend,
                consider coming as a judge, mentor, or volunteer.
              </span>
            }
          />
          <FAQuestion
            question="Is there any cost?"
            answer={
              <span>
                Nope! Thanks to our sponsors, HackTJ is completely free!
              </span>
            }
          />
          <FAQuestion
            question="Is there a deadline?"
            answer={
              <span>
                Registration for participants, judges, mentors, and volunteers
                opens on September 25 at 8 p.m. Registration for participants
                closes on October 16&mdash;this is a hard deadline; we do not
                accept submissions after 8 p.m. Judges, mentors, and volunteers
                will be able to register until the start of the event.
              </span>
            }
          />
          <FAQuestion
            question="Do you have a code of conduct?"
            small
            answer={
              <span>
                Yes, good question! We have adopted the{" "}
                <Link
                  to="conduct.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MLH code of conduct
                </Link>
                , which all attendees will be required to adhere to.
              </span>
            }
          />
          <FAQuestion
            question="Isn&#39;t hacking illegal?"
            answer={
              <span>
                In the context of a hackathon, &quot;hacking&quot; is to build a
                real application over the length of the event. It&apos;s
                important to not confuse this with illegal hacking, which is
                gaining unauthorized access to a computer.
              </span>
            }
          />
          <FAQuestion
            question="Do I need a team?"
            answer={
              <span>
                If you already have a team of 2-4 people you want to work with,
                that&apos;s awesome! If not don&apos;t worry because we&apos;ll
                have an opportunity for people to join a team if they need one.
              </span>
            }
          />
          <FAQuestion
            question="What if I don&#39;t know how to code?"
            small
            answer={
              <span>
                Come to HackTJ! Coding is fun, creative, and an important skill,
                and HackTJ is the perfect way to learn. We&apos;ll have
                workshops and mentors to help guide you.
              </span>
            }
          />
          <FAQuestion
            question="What prizes can I win?"
            answer={
              <span>
                HackTJ hosts prizes for the best projects in the following
                categories: Overall Hack, Web App, Mobile App,Design, Social
                Impact Hack, and Beginner Hack (first-year coder teams). Major
                League Hacking and some of our partners also host their own
                Sponsored Prizes, which you can explore when the 7.5 Devpost
                goes live.
              </span>
            }
          />
          <FAQuestion
            question="How do I register?"
            answer={
              <ol>
                <li>
                  At 8 p.m. on September 25, a button will appear at the top of
                  this site. Click this.
                </li>
                <li>
                  You will be redirected to a page where you can click the
                  appropriate form.
                </li>
                <li>
                  Fill out the questions. Near the end, there will be a few
                  questions where you can upload your forms.
                  <ul>
                    <li>
                      In order to speed up the registration process, print out
                      these forms, fill them out, and scan them beforehand.
                    </li>
                  </ul>
                </li>
              </ol>
            }
          />
          <FAQuestion
            question="How are tickets decisions made?"
            small
            answer={
              <span>
                Tickets decisisons are made based on a variety of factors,
                including the registration time. Sign up quickly to increase the
                chance that you are given a HackTJ 7.5 ticket!
              </span>
            }
          />
          <div />

          {/* <div
        className="vertical-segment white"
        style={{
        borderLeft: "6px solid white",
        height: "102.7%",
        position: "absolute",
        left: "auto",
        right: "0%",
        top: "2.7%"
        }}
        ></div> */}
        </div>
        <p className="large bottom-question">
          If your question is not answered here, just ask us:{" "}
          <a
            href="mailto:hello@hacktj.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            hello@hacktj.org
          </a>
          .
        </p>
      </Container>
    </section>
  </>
);

export default Questions;

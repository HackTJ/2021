import React, { Component } from "react";
import FAQuestion from "./FAQuestion";
import "./index.css";

class Questions extends Component {
  render() {
    return (
      <>
        <a className="anchor" id="faq"></a>
        <section className="green faq">
          <div className="container">
            <div className="animation-container vertical left top">
              <div className="animated white"></div>
            </div>
            <div className="header-row">
              <div className="animation-container horizontal left-side">
                <div className="animated left white"></div>
              </div>
              <h1 className="section-title">FAQ</h1>
              <div className="animation-container horizontal right-side">
                <div className="animated left white"></div>
              </div>
            </div>
            <ul className="faq-container">
              <div className="row">
                <FAQuestion
                  question="What is HackTJ?"
                  answer=<span>
                    HackTJ is a student-run hackathon where you will have 24
                    hours to learn how to code and/or work with your friends to
                    make your idea come to life.
                  </span>
                />
                <FAQuestion
                  question="When is HackTJ?"
                  answer=<span>
                    HackTJ will start on Saturday, March 21 and run until
                    Sunday, March 22. Check-in closes at 1pm on Saturday. We
                    will not allow entry after this time.
                  </span>
                />
                <FAQuestion
                  question="Who can attend?"
                  answer=<span>
                    HackTJ is open to any and all current high school students.
                    If you&apos;re not a high school student but would like to
                    attend, consider coming as a judge, mentor, or volunteer.
                  </span>
                />
              </div>
              <div className="row">
                <FAQuestion
                  question="Is there any cost?"
                  answer=<span>
                    Nope! Thanks to our sponsors, HackTJ is completely free!
                  </span>
                />
                <FAQuestion
                  question="Is there a deadline?"
                  answer=<span>Registration will open soon!</span>
                />
                <FAQuestion
                  question="Do you have a code of conduct?"
                  small={true}
                  answer=<span>
                    Yes, good question! We have adopted the{" "}
                    <a
                      href={process.env.PUBLIC_URL + '/conduct.pdf'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MLH code of conduct
                    </a>
                    , which all attendees will be required to adhere to.
                  </span>
                />
              </div>
              <div className="row">
                <FAQuestion
                  question="Isn't hacking illegal?"
                  answer=<span>
                    In the context of a hackathon, &quot;hacking&quot; is to
                    build a real application over the length of the event.
                    It&apos;s important to not confuse this with illegal
                    hacking, which is gaining unauthorized access to a computer.
                  </span>
                />
                <FAQuestion
                  question="Do I need a team?"
                  answer=<span>
                    If you already have a team of 2-4 people you want to work
                    with, that&apos;s awesome! If not don&apos;t worry because
                    we&apos;ll have an opportunity for people to join a team if
                    they need one.
                  </span>
                />
                <FAQuestion
                  question="What if I don't know how to code?"
                  small={true}
                  answer=<span>
                    Come to HackTJ! Coding is fun, creative, and an important
                    skill, and HackTJ is the perfect way to learn. We&apos;ll
                    have workshops and mentors to help guide you.
                  </span>
                />
              </div>
              <div className="row">
                <FAQuestion
                  question="What should I bring?"
                  answer=<span>
                    You&apos;ll need to bring your laptop, phone, chargers, a
                    sleeping bag/pillow, toiletries, and extra clothing. We
                    suggest you bring a set of nice clothes for demos;
                    you&apos;ll want to make the best impression.
                  </span>
                />
                <FAQuestion
                  question="Will there be food?"
                  answer=<span>Yes. Lots and lots of food.</span>
                />
                <FAQuestion
                  question="What if I have dietary concerns?"
                  small={true}
                  answer=<span>
                    We&apos;ll be providing meals for most everyone at HackTJ,
                    but if you have special concerns please{" "}
                    <a href="mailto:hello@hacktj.org">let us know</a>.
                  </span>
                />
              </div>
              <div className="row">
                <FAQuestion
                  question="What hardware will be available?"
                  small={true}
                  answer=<span>
                    All of the hardware at HackTJ is generously provided by MLH.
                    Our list is not finalized yet, but you can browse through
                    the usual offerings at{" "}
                    <a href="https://hardware.mlh.io/">hardware.mlh.io</a>. In
                    previous years we’ve had multiple Raspberry Pi and Arduino
                    kits, powerful computers, Oculus headsets, Amazon Echos,
                    Google Homes, and various sensors, motors, wires, etc.
                  </span>
                />
                <FAQuestion
                  question="What prizes can I win?"
                  answer=<span>
                    HackTJ hosts prizes for the best projects in the following
                    categories: Overall Hack, Web App, Mobile App, Design,
                    Social Impact Hack, and Beginner Hack (first-year coder
                    teams). Major League Hacking and some of our partners also
                    host their own Sponsored Prizes, which you can explore when
                    the 7.0 Devpost goes live.
                  </span>
                />
                <FAQuestion
                  question="Can I be a mentor, judge, or volunteer?"
                  small={true}
                  answer=<span>
                    Mentors work interactively with students to help them
                    develop their projects. This could mean brainstorming ideas,
                    teaching students new skills or languages, and
                    troubleshooting when they run into obstacles. If you have
                    any experience with CS and are available at any time during
                    HackTJ, you can be a mentor! Judges listen to student
                    pitches during our Sunday-morning expo and decide which
                    projects are winners. Experience is preferred but not
                    necessary. Volunteers help our team with logistical tasks
                    such as registration, food service, and chaperoning. No
                    experience is necessary to be a volunteer. Registration for
                    these roles will open in March, but you can reach out to{" "}
                    <a href="mailto:hello@hacktj.org">hello@hacktj.org</a> in
                    advance to be notified when the form is available!
                  </span>
                />
              </div>
            </ul>
            <p className="large">
              If your question is not answered here, just ask us:{" "}
              <a href="mailto:hello@hacktj.org">hello@hacktj.org</a>.
            </p>
            <div className="animation-container vertical right bottom">
              <div className="animated white"></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Questions;

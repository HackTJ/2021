import config from "../../config";

import { Link } from "react-router-dom";

const dateFormat = { weekday: "long", month: "long", day: "numeric" };
const startDate = config.startDate.toLocaleDateString("en-US", dateFormat);
const endDate = config.endDate.toLocaleDateString("en-US", dateFormat);

export default [
  {
    question: "What is HackTJ?",
    answer: (
      <p>
        HackTJ is a student-run hackathon where you will have 24 hours to learn
        how to code and/or work with your friends to make your idea come to
        life.
      </p>
    ),
  },
  {
    question: "When is HackTJ?",
    answer: (
      <span>
        HackTJ will start on {startDate} and run until {endDate}.
      </span>
    ),
  },
  {
    question: "Who can attend?",
    answer: (
      <span>
        HackTJ is open to any and all current high school students. If
        you&apos;re not a high school student but would like to attend, consider
        coming as a judge, mentor, or volunteer.
      </span>
    ),
  },
  {
    question: "Is there any cost?",
    answer: (
      <span>Nope! Thanks to our sponsors, HackTJ is completely free!</span>
    ),
  },
  {
    question: "Is there a deadline?",
    answer: (
      <span>
        Registration for participants, judges, mentors, and volunteers opens on
        September 25 at 8 p.m. Registration for participants closes on October
        16&mdash;this is a hard deadline; we do not accept submissions after 8
        p.m. Judges, mentors, and volunteers will be able to register until the
        start of the event.
      </span>
    ),
  },
  {
    question: "Do you have a code of conduct?",
    answer: (
      <span>
        Yes, good question! We have adopted the{" "}
        <Link to="conduct.pdf" target="_blank" rel="noopener noreferrer">
          MLH code of conduct
        </Link>
        , which all attendees will be required to adhere to.
      </span>
    ),
  },
  {
    question: "Isn't hacking illegal?",
    answer: (
      <span>
        In the context of a hackathon, &quot;hacking&quot; is to build a real
        application over the length of the event. It&apos;s important to not
        confuse this with illegal hacking, which is gaining unauthorized access
        to a computer.
      </span>
    ),
  },
  {
    question: "Do I need a team?",
    answer: (
      <span>
        If you already have a team of 2-4 people you want to work with,
        that&apos;s awesome! If not don&apos;t worry because we&apos;ll have an
        opportunity for people to join a team if they need one.
      </span>
    ),
  },
  {
    question: "What if I don't know how to code?",
    answer: (
      <span>
        Come to HackTJ! Coding is fun, creative, and an important skill, and
        HackTJ is the perfect way to learn. We&apos;ll have workshops and
        mentors to help guide you.
      </span>
    ),
  },
  {
    question: "What prizes can I win?",
    answer: (
      <span>
        HackTJ hosts prizes for the best projects in the following categories:
        Overall Hack, Web App, Mobile App,Design, Social Impact Hack, and
        Beginner Hack (first-year coder teams). Major League Hacking and some of
        our partners also host their own Sponsored Prizes, which you can explore
        when the 7.5 Devpost goes live.
      </span>
    ),
  },
  {
    question: "How do I register?",
    answer: (
      <ol>
        <li>
          At 8 p.m. on September 25, a button will appear at the top of this
          site. Click this.
        </li>
        <li>
          You will be redirected to a page where you can click the appropriate
          form.
        </li>
        <li>
          Fill out the questions. Near the end, there will be a few questions
          where you can upload your forms.
          <ul>
            <li>
              In order to speed up the registration process, print out these
              forms, fill them out, and scan them beforehand.
            </li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    question: "How are tickets decisions made?",
    answer: (
      <span>
        Tickets decisisons are made based on a variety of factors, including the
        registration time. Sign up quickly to increase the chance that you are
        given a HackTJ 8.0 ticket!
      </span>
    ),
  },
];

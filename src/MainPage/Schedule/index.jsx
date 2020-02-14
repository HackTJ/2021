import React from "react";
import "./index.css";

const Schedule = () => (
  <>
    <a className="anchor" id="schedule">
      Schedule
    </a>
    <section className="schedule" id="schedules">
      <div className="container">
        <div className="animation-container vertical top left extra-height">
          <div className="animated"></div>
        </div>
        <h1 className="section-title">Schedule</h1>
        <ul className="day">
          <div className="day-title">
            <h3>Saturday, March 21</h3>
            <div className="animation-container horizontal line-schedule">
              <div className="animated left"></div>
            </div>
          </div>
          <li className="item">
            <h6 className="time">10:00am</h6>
            <div className="description">Student Check-In & Sponsor Fair</div>
          </li>
          <li className="item">
            <h6 className="time">11:00am</h6>
            <div className="description">Opening Ceremony</div>
          </li>
          <li className="item">
            <h6 className="time">11:30am</h6>
            <div className="description">Hacking Begins</div>
          </li>
          <li className="item">
            <h6 className="time">1:00pm</h6>
            <div className="description">
              Lunch, Registration Closes (no entry after this time)
            </div>
          </li>
          <li className="item">
            <h6 className="time">2:00pm</h6>
            <div className="description">Workshops Begin</div>
          </li>
          <li className="item">
            <h6 className="time">4:00pm</h6>
            <div className="description">Afternoon Snack</div>
          </li>
          <li className="item">
            <h6 className="time">7:00pm</h6>
            <div className="description">Dinner</div>
          </li>
          <li className="item">
            <h6 className="time">9:00pm</h6>
            <div className="description">Women in Tech Panel</div>
          </li>
        </ul>
        <ul className="day">
          <div className="day-title">
            <h3>Sunday, March 22</h3>
            <div className="animation-container horizontal line-schedule">
              <div className="animated left"></div>
            </div>
          </div>
          <li className="item">
            <h6 className="time">12:00am</h6>
            <div className="description">Midnight Snack</div>
          </li>
          <li className="item">
            <h6 className="time">4:00am</h6>
            <div className="description">Late Night Snack</div>
          </li>
          <li className="item">
            <h6 className="time">8:00am</h6>
            <div className="description">Hacking Ends & Breakfast Begins</div>
          </li>
          <li className="item">
            <h6 className="time">8:45am</h6>
            <div className="description">Clean-Up</div>
          </li>
          <li className="item">
            <h6 className="time">9:30am</h6>
            <div className="description">Judging Starts</div>
          </li>
          <li className="item">
            <h6 className="time">11:00am</h6>
            <div className="description">People&apos;s Choice Voting</div>
          </li>
          <li className="item">
            <h6 className="time">11:30am</h6>
            <div className="description">Closing Ceremony</div>
          </li>
          <li className="item">
            <h6 className="time">12:00pm</h6>
            <div className="description">Hackathon Ends</div>
          </li>
        </ul>
      </div>
    </section>
  </>
);

export default Schedule;

import React, { useState } from "react";

import "./index.css";

const Schedule = (): JSX.Element => {
  const [isFirstDay, setIsFirstDay] = useState(true);

  return (
    <>
      <a className="anchor" id="schedule" href="#schedule">
        Schedule
      </a>
      <section className="schedule" id="schedules">
        <h1 className="section-title">2019 Schedule</h1>
        <div className="container">
          <div className="dates">
            <div
              className={`category-bubble ${isFirstDay ? "selected" : ""}`}
              onClick={() => setIsFirstDay(true)}
            >
              Saturday, March 21
            </div>
            <div
              className={`category-bubble ${!isFirstDay ? "selected" : ""}`}
              onClick={() => setIsFirstDay(false)}
            >
              Sunday, March 22
            </div>
          </div>
          <div className="schedule-area">
            <div className="schedule">
              {isFirstDay && (
                <>
                  <li className="item">
                    <h6 className="time">10:00 a.m.</h6>
                    <div className="description">
                      Student Check-In & Sponsor Fair
                    </div>
                  </li>
                  <li className="item">
                    <h6 className="time">11:00 a.m.</h6>
                    <div className="description">Opening Ceremony</div>
                  </li>
                  <li className="item">
                    <h6 className="time">11:30 a.m.</h6>
                    <div className="description">Hacking Begins</div>
                  </li>
                  <li className="item">
                    <h6 className="time">1:00 p.m.</h6>
                    <div className="description">
                      Lunch, Registration Closes (no entry after this time)
                    </div>
                  </li>
                  <li className="item">
                    <h6 className="time">2:00 p.m.</h6>
                    <div className="description">Workshops Begin</div>
                  </li>
                  <li className="item">
                    <h6 className="time">4:00 p.m.</h6>
                    <div className="description">Afternoon Snack</div>
                  </li>
                  <li className="item">
                    <h6 className="time">7:00 p.m.</h6>
                    <div className="description">Dinner</div>
                  </li>
                  <li className="item">
                    <h6 className="time">9:00 p.m.</h6>
                    <div className="description">Women in Tech Panel</div>
                  </li>
                </>
              )}
              {!isFirstDay && (
                <>
                  <li className="item">
                    <h6 className="time">12:00 a.m.</h6>
                    <div className="description">Midnight Snack</div>
                  </li>
                  <li className="item">
                    <h6 className="time">4:00 a.m.</h6>
                    <div className="description">Late Night Snack</div>
                  </li>
                  <li className="item">
                    <h6 className="time">8:00 a.m.</h6>
                    <div className="description">
                      Hacking Ends & Breakfast Begins
                    </div>
                  </li>
                  <li className="item">
                    <h6 className="time">8:45 a.m.</h6>
                    <div className="description">Clean-Up</div>
                  </li>
                  <li className="item">
                    <h6 className="time">9:30 a.m.</h6>
                    <div className="description">Judging Starts</div>
                  </li>
                  <li className="item">
                    <h6 className="time">11:00 a.m.</h6>
                    <div className="description">
                      People&apos;s Choice Voting
                    </div>
                  </li>
                  <li className="item">
                    <h6 className="time">11:30 a.m.</h6>
                    <div className="description">Closing Ceremony</div>
                  </li>
                  <li className="item">
                    <h6 className="time">12:00 p.m.</h6>
                    <div className="description">Hackathon Ends</div>
                  </li>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;

import { useState } from "react";
import * as React from "react";

import "./index.css";

const scheduleData: {
  date: string;
  scheduleEvents: { time: string; description: string }[];
}[] = [
  {
    date: "Saturday, March 21",
    scheduleEvents: [
      {
        time: "10:00 a.m.",
        description: "Student Check-In & Sponsor Fair",
      },
      {
        time: "11:00 a.m.",
        description: "Opening Ceremony",
      },
      {
        time: "11:30 a.m.",
        description: "Hacking Begins",
      },
      {
        time: "1:00 p.m.",
        description: "Lunch, Registration Closes (no entry after this time)",
      },
      {
        time: "2:00 p.m.",
        description: "Workshops Begin",
      },
      {
        time: "4:00 p.m.",
        description: "Afternoon Snack",
      },
      {
        time: "7:00 p.m.",
        description: "Dinner",
      },
      {
        time: "9:00 p.m.",
        description: "Women in Tech Panel",
      },
    ],
  },
  {
    date: "Saturday, March 22",
    scheduleEvents: [
      {
        time: "12:00 a.m.",
        description: "Midnight Snack",
      },
      {
        time: "4:00 a.m.",
        description: "Late Night Snack",
      },
      {
        time: "8:00 a.m.",
        description: "Hacking Ends & Breakfast Begins",
      },
      {
        time: "8:45 a.m.",
        description: "Clean-up",
      },
      {
        time: "9:30 a.m.",
        description: "Judging Starts",
      },
      {
        time: "11:00 a.m.",
        description: "People's Choice Voting",
      },
      {
        time: "11:30 a.m.",
        description: "Closing Ceremony",
      },
      {
        time: "12:00 p.m.",
        description: "Hackathon Ends",
      },
    ],
  },
];

// we disable the react/no-array-index-key lint rule because we'll never modify
// the scheduleData object so using indices as keys shouldn't cause any trouble

const Schedule: React.FunctionComponent = (): JSX.Element => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <>
      <a className="anchor" id="schedule" href="#schedule">
        Schedule
      </a>
      <section className="schedule" id="schedules">
        <h1 className="section-title">2019 Schedule</h1>
        <div className="container">
          <div className="dates" role="tablist">
            {/* eslint-disable react/no-array-index-key */}
            {scheduleData.map((day, index) => (
              <div
                key={index}
                className={`category-bubble ${
                  selectedDayIndex === index ? "selected" : ""
                }`}
                onClick={() => setSelectedDayIndex(index)}
                onKeyPress={() => setSelectedDayIndex(index)}
                role="tab"
                id={`schedule-tab-${index}`}
                tabIndex={0}
                aria-controls={`schedule-day-${index}`}
                aria-selected={selectedDayIndex === index}
              >
                {day.date}
              </div>
            ))}
            {/* eslint-enable react/no-array-index-key */}
          </div>
          <div className="schedule-area">
            <div className="schedule">
              <ul
                role="tabpanel"
                aria-labelledby={`schedule-tab-${selectedDayIndex}`}
                id={`schedule-day-${selectedDayIndex}`}
                hidden={false}
                aria-hidden={false}
              >
                {/* eslint-disable react/no-array-index-key */}
                {scheduleData[selectedDayIndex].scheduleEvents.map(
                  (scheduleEvent, index) => (
                    <li className="item" key={index}>
                      <h6 className="time">{scheduleEvent.time}</h6>
                      <div className="description">
                        {scheduleEvent.description}
                      </div>
                    </li>
                  )
                )}
                {/* eslint-enable react/no-array-index-key */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Schedule;

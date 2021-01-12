import { useState } from "react";
import type { FunctionComponent } from "react";

import "./index.css";

const scheduleData: {
  date: string;
  scheduleEvents: { time: string; description: string }[];
}[] = [
  {
    date: "Saturday, December 12",
    scheduleEvents: [
      {
        time: "10:00 a.m.",
        description: "Opening Ceremony",
      },
      {
        time: "11:00 a.m.",
        description: "Hacking Begins",
      },
      {
        time: "2:00 p.m.",
        description: "Workshops Begin",
      },
      {
        time: "2:30 p.m.",
        description: "TypeRacer Tournament",
      },
      {
        time: "4:30 p.m.",
        description: "Among Us",
      },
      {
        time: "8:00 p.m.",
        description: "MLH's Bob Ross with MS Paint",
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
    date: "Sunday, December 13",
    scheduleEvents: [
      {
        time: "1:00 p.m.",
        description: "Alumni Panel for CS x Fields in STEM",
      },
      {
        time: "4:00 p.m.",
        description: "Hacking Ends",
      },
      {
        time: "4:30 p.m.",
        description: "Judging Starts",
      },
      {
        time: "9:30 p.m.",
        description: "Closing Ceremony",
      },
      {
        time: "10:30 p.m.",
        description: "Hackathon Ends",
      },
    ],
  },
];

// we disable the react/no-array-index-key lint rule because we'll never modify
// the scheduleData object so using indices as keys shouldn't cause any trouble

const Schedule: FunctionComponent = (): JSX.Element => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <>
      <a className="anchor" id="schedule" href="#schedule">
        Schedule
      </a>
      <section className="schedule" id="schedules">
        <h1 className="section-title">2020 Schedule</h1>
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

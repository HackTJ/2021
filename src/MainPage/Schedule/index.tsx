import { useState } from "react";
import type { FunctionComponent } from "react";

import config from "../../config";

import styles from "./schedule.module.css";

const dateFormat = {
  weekday: "long",
  month: "long",
  day: "numeric",
  timeZone: "America/New_York",
};
const startDate = config.event.startDate.toLocaleDateString(
  "en-US",
  dateFormat
);
const endDate = config.event.endDate.toLocaleDateString("en-US", dateFormat);

const scheduleData: {
  date: string;
  scheduleEvents: { time: string; description: string }[];
}[] = [
  {
    date: startDate,
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
    date: endDate,
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
Object.freeze(scheduleData);

const Schedule: FunctionComponent<{}> = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  return (
    <>
      <a className="anchor" id="schedule" href="#schedule">
        Schedule
      </a>
      <section id="schedule">
        <h1 className="section-title">Schedule</h1>
        <div className={styles.wrapper}>
          <div className={styles.dates} role="tablist">
            {scheduleData.map((day, index) => (
              <div
                key={index}
                className={`${styles.categoryBubble} ${
                  selectedDayIndex === index ? styles.selected : ""
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
          </div>
          <ul
            role="tabpanel"
            className={styles.scheduleArea}
            aria-labelledby={`schedule-tab-${selectedDayIndex}`}
            id={`schedule-day-${selectedDayIndex}`}
            hidden={false}
            aria-hidden={false}
          >
            {scheduleData[selectedDayIndex].scheduleEvents.map(
              ({ time, description }, index) => (
                <li className={styles.event} key={index}>
                  <span className={styles.time}>{time}</span>
                  <span>{description}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Schedule;

import { useState } from "react";
import type { FunctionComponent } from "react";

import config from "../../config";

import styles from "./schedule.module.css";

const dateWithTime = (date: Date, time: string) => {
  let newDate = new Date(date.getTime());
  const parsedTime = time.match(/(\d+)(?::(\d\d))?\s*(p?)/i) || ["0", "00", ""];
  newDate.setHours(parseInt(parsedTime[1], 10) + (parsedTime[3] ? 12 : 0));
  newDate.setMinutes(parseInt(parsedTime[2], 10) || 0);
  return newDate;
};

interface ScheduleEvent {
  time: Date;
  description: string;
}

const scheduleEvents: ScheduleEvent[] = [
  {
    time: dateWithTime(config.event.startDate, "10:00 a.m."),
    description: "Opening Ceremony",
  },
  {
    time: dateWithTime(config.event.startDate, "11:00 a.m."),
    description: "Hacking Begins",
  },
  {
    time: dateWithTime(config.event.startDate, "2:00 p.m."),
    description: "Workshops Begin",
  },
  {
    time: dateWithTime(config.event.startDate, "2:30 p.m."),
    description: "TypeRacer Tournament",
  },
  {
    time: dateWithTime(config.event.startDate, "4:30 p.m."),
    description: "Among Us",
  },
  {
    time: dateWithTime(config.event.startDate, "8:00 p.m."),
    description: "MLH's Bob Ross with MS Paint",
  },
  {
    time: dateWithTime(config.event.startDate, "7:00 p.m."),
    description: "Dinner",
  },
  {
    time: dateWithTime(config.event.startDate, "9:00 p.m."),
    description: "Women in Tech Panel",
  },
  {
    time: dateWithTime(config.event.endDate, "1:00 p.m."),
    description: "Alumni Panel for CS x Fields in STEM",
  },
  {
    time: dateWithTime(config.event.endDate, "4:00 p.m."),
    description: "Hacking Ends",
  },
  {
    time: dateWithTime(config.event.endDate, "4:30 p.m."),
    description: "Judging Starts",
  },
  {
    time: dateWithTime(config.event.endDate, "9:30 p.m."),
    description: "Closing Ceremony",
  },
  {
    time: dateWithTime(config.event.endDate, "10:30 p.m."),
    description: "Hackathon Ends",
  },
].sort((firstEl, secondEl) => firstEl.time.valueOf() - secondEl.time.valueOf());
Object.freeze(scheduleEvents);

const scheduleData: {
  [day: string]: ScheduleEvent[];
} = {};
scheduleEvents.forEach((event) => {
  // Date objects can't be used as indices:
  // const date = new Date(event.time.getTime());
  // date.setHours(0,0,0,0); // remove the time
  const date = event.time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
  if (scheduleData[date]) {
    scheduleData[date].push(event);
  } else {
    scheduleData[date] = [event];
  }
});
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
          <ul className={styles.dates} role="tablist">
            {Object.keys(scheduleData).map((day, index) => (
              <li
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
                {day}
              </li>
            ))}
          </ul>
          {Object.values(scheduleData).map((event, index) => (
            <table
              role="tabpanel"
              className={styles.scheduleArea}
              aria-labelledby={`schedule-tab-${index}`}
              id={`schedule-day-${index}`}
              hidden={index !== selectedDayIndex}
              aria-hidden={index !== selectedDayIndex}
              key={index}
            >
              <thead>
                <tr>Time</tr>
                <tr>Description</tr>
              </thead>
              <tbody>
                {event.map(({ time, description }, index) => (
                  <tr className={styles.event} key={index}>
                    <td className={styles.time}>
                      {time.toLocaleTimeString([], {
                        hour: "numeric",
                        hour12: true,
                        minute: "numeric",
                      })}
                    </td>
                    <td>{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </section>
    </>
  );
};

export default Schedule;

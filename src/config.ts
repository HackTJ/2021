import { DateTime, Interval } from "luxon";

const globals = {
  registration: Interval.fromDateTimes(
    DateTime.fromObject({
      year: 2021,
      month: 2,
      day: 22,
      hour: 20,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    }),
    DateTime.fromObject({
      year: 2021,
      month: 3,
      day: 19,
      hour: 20,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    })
  ),
  event: Interval.fromDateTimes(
    DateTime.fromObject({
      year: 2021,
      month: 4,
      day: 10,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    }),
    DateTime.fromObject({
      year: 2021,
      month: 4,
      day: 11,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      zone: "America/New_York",
    })
  ),
};

Object.freeze(globals);

export default globals;

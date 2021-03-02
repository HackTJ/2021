import { render, screen } from "@testing-library/react";
import { DateTime, Interval } from "luxon";
import RegistationChoice from "./index";
import config from "../../config";

const now = DateTime.now();

const fiveMinAgo = now.minus({ minutes: 5 });
const tenMinAgo = now.minus({ minutes: 10 });
const fiveMinLater = now.plus({ minutes: 5 });
const tenMinLater = now.plus({ minutes: 10 });

describe("registration", () => {
  it("has not opened for anyone", () => {
    Object.defineProperty(config, "registration", {
      // registration has not opened
      value: Interval.fromDateTimes(
        fiveMinLater.setZone("America/New_York"),
        tenMinLater.setZone("America/New_York")
      ),
    });
    Object.defineProperty(config, "event", {
      // event hasn't started
      value: Interval.fromDateTimes(
        tenMinLater.setZone("America/New_York"),
        tenMinLater.setZone("America/New_York")
      ),
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants has not opened yet", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there are no links to forms
  });

  it("is open for everyone", () => {
    Object.defineProperty(config, "registration", {
      // registration has opened but not closed
      value: Interval.fromDateTimes(
        fiveMinAgo.setZone("America/New_York"),
        fiveMinLater.setZone("America/New_York")
      ),
    });
    Object.defineProperty(config, "event", {
      // event hasn't started yet
      value: Interval.fromDateTimes(
        tenMinLater.setZone("America/New_York"),
        tenMinLater.setZone("America/New_York")
      ),
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants is open", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there are links to forms
  });

  it("has closed for students and is open for volunteers", () => {
    Object.defineProperty(config, "registration", {
      // registration for students has opened and closed
      value: Interval.fromDateTimes(
        tenMinAgo.setZone("America/New_York"),
        fiveMinAgo.setZone("America/New_York")
      ),
    });
    Object.defineProperty(config, "event", {
      // event hasn't started yet
      value: Interval.fromDateTimes(
        fiveMinLater.setZone("America/New_York"),
        tenMinLater.setZone("America/New_York")
      ),
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants has closed", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there is a link to a form for volunteers only
  });

  it("has closed for everyone", () => {
    Object.defineProperty(config, "registration", {
      // registration for students has opened and closed
      value: Interval.fromDateTimes(
        tenMinAgo.setZone("America/New_York"),
        fiveMinAgo.setZone("America/New_York")
      ),
    });
    Object.defineProperty(config, "event", {
      // event has started but not ended
      value: Interval.fromDateTimes(
        fiveMinAgo.setZone("America/New_York"),
        fiveMinLater.setZone("America/New_York")
      ),
    });

    render(<RegistationChoice />);

    expect(
      screen.getByText("Registration for participants has closed", {
        exact: false,
      })
    ).toBeInTheDocument();

    // TODO: assert that there are no links to forms
  });
});

import { render, screen } from "@testing-library/react";
import RegistationChoice from "./index";
import config from "../config";

const today = new Date();

const oneDayBefore = new Date(today.getTime());
oneDayBefore.setDate(today.getDate() - 1);

const twoDaysBefore = new Date(oneDayBefore.getTime());
twoDaysBefore.setDate(oneDayBefore.getDate() - 1);

const oneDayAfter = new Date(today.getTime());
oneDayAfter.setDate(today.getDate() + 1);

const twoDaysAfter = new Date(oneDayAfter.getTime());
twoDaysAfter.setDate(oneDayAfter.getDate() + 1);

describe("registration", () => {
  it("has not opened for anyone", () => {
    Object.defineProperty(config, "registration", {
      // registration has not opened
      value: {
        startDate: oneDayAfter,
        endDate: oneDayAfter,
      },
      writable: true,
    });
    Object.defineProperty(config, "event", {
      // event hasn't started
      value: {
        startDate: twoDaysAfter,
        endDate: twoDaysAfter,
      },
      writable: true,
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
      value: {
        startDate: oneDayBefore,
        endDate: oneDayAfter,
      },
      writable: true,
    });
    Object.defineProperty(config, "event", {
      // event hasn't started yet
      value: {
        startDate: twoDaysAfter,
        endDate: twoDaysAfter,
      },
      writable: true,
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
      value: {
        startDate: twoDaysBefore,
        endDate: oneDayBefore,
      },
      writable: true,
    });
    Object.defineProperty(config, "event", {
      // event hasn't started yet
      value: {
        startDate: oneDayAfter,
        endDate: twoDaysAfter,
      },
      writable: true,
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
      value: {
        startDate: twoDaysBefore,
        endDate: twoDaysBefore,
      },
      writable: true,
    });
    Object.defineProperty(config, "event", {
      // event has started but not ended
      value: {
        startDate: oneDayBefore,
        endDate: oneDayAfter,
      },
      writable: true,
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

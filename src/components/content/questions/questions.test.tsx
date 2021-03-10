// import { render, screen } from "@testing-library/preact";
import Questions from "./index";
import questionData from "./questions";

describe("FAQ cards", () => {
  it("should be round when selected", () => {
    render(<Questions />);

    expect(screen).toMatchSnapshot();
  });
});

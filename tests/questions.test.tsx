import { h } from "preact";
import { render } from "@testing-library/preact";

import Questions from "../src/components/content/questions";
// import questionData from "../src/components/content/questions/questions";

describe("FAQ cards", () => {
  it("should be round when selected", () => {
    render(<Questions />);
  });
});

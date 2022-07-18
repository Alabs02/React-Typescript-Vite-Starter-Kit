import { render } from "@testing-library/react";
import Router from "@/router";

describe("Testing App Component Suite", () => {
  it("should execute Router without errors", () => {
    render(<Router />);
  });
});
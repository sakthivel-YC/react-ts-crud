import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SimpleCard from ".";

afterEach(cleanup);
describe("Check SimpleCard component render", () => {
  const children = <p>Test children</p>;

  it("Testing title and children props", () => {
    render(<SimpleCard title='Test title'>{children}</SimpleCard>);
    expect(screen.getByTestId("title-test")?.textContent).toBe("Test title");
    expect(screen.getByTestId("child-prop-test")).toHaveTextContent(
      "Test children"
    );
  });
});

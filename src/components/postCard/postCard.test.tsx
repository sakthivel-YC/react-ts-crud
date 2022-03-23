import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import PostCard from ".";

afterEach(cleanup);
describe("Check PostCard component render", () => {
  it("Buttons and Loading indicator with visible", () => {
    render(
      <PostCard
        title='Test title'
        body='Test title'
        postId={1}
        handleEdit={() => {}}
        handleDelete={() => {}}
        loading={false}
      />
    );
    expect(screen.queryByTestId("button-edit")).toBeVisible();
    expect(screen.queryByTestId("button-delete")).toBeVisible();
    expect(screen.queryByTestId("spinner")).toBe(null);
  });

  it("Buttons and Loading indicator without visible", () => {
    render(
      <PostCard
        title='Test title'
        body='Test title'
        postId={1}
        handleEdit={() => {}}
        handleDelete={() => {}}
        loading={true}
      />
    );
    expect(screen.queryByTestId("button-edit")).toBe(null);
    expect(screen.queryByTestId("button-delete")).toBe(null);
    expect(screen.queryByTestId("spinner")).toBeVisible();
  });

  it("Text elements testing", () => {
    render(
      <PostCard
        title='Hello World'
        body='This is simple test content for a post.'
        postId={1}
        handleEdit={() => {}}
        handleDelete={() => {}}
        loading={true}
      />
    );
    expect(screen.queryByTestId("test-title")?.textContent).toBe("Hello World");
    expect(screen.queryByTestId("test-body")?.textContent).toBe(
      "This is simple test content for a post."
    );
  });

  it("Button click events call callback props", () => {
    const handleClick = jest.fn();
    render(
      <PostCard
        title='Hello World'
        body='This is simple test content for a post.'
        postId={1}
        handleEdit={handleClick}
        handleDelete={handleClick}
        loading={false}
      />
    );
    fireEvent.click(screen.getByTestId("button-edit"));
    fireEvent.click(screen.getByTestId("button-delete"));
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});

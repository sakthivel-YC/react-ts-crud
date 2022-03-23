import { getPosts } from "..";

const dummyData = [
  { id: 1, title: "test title", body: "test content", userId: 333 },
];

describe("getPostsAPI", () => {
  it("getPostsOnSuccess", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(dummyData) })
        ) as jest.Mock
      );
    const posts = await getPosts({});
    expect(posts).toBe(dummyData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("getPostsOnError", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.reject(dummyData) })
        ) as jest.Mock
      );
    const posts = await getPosts({});
    expect(posts).toBe(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

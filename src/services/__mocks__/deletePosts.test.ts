import { putPosts as deletePosts } from "..";

const dummyData = { status: true };
describe("putPostAPI", () => {
  it("putPostOnSuccess", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(dummyData) })
        ) as jest.Mock
      );
    const posts = await deletePosts({});
    expect(posts).toBe(dummyData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("putPostOnError", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.reject(dummyData) })
        ) as jest.Mock
      );
    const posts = await deletePosts({});
    expect(posts).toBe(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

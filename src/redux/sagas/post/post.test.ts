import { takeLatest } from "redux-saga/effects";
import {
  deletePostInProgress,
  getPostListInProgress,
  postWatcher,
  putPostInProgress,
} from ".";
import {
  DELETE_POST_IN_PROGRESS,
  GET_POSTS_IN_PROGRESS,
  PUT_POST_IN_PROGRESS,
} from "../../types/postsTypes";

import * as api from "../../../services";
import { runSaga } from "redux-saga";
import { postActions } from "../../actions";

describe("postWatcher tests", () => {
  const genObject = postWatcher();

  it("should wait for GET_POSTS_IN_PROGRESS action and call postWatcher", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(GET_POSTS_IN_PROGRESS, getPostListInProgress)
    );
  });

  it("should wait for PUT_POST_IN_PROGRESS action and call postWatcher", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(PUT_POST_IN_PROGRESS, putPostInProgress)
    );
  });

  it("should wait for DELETE_POST_IN_PROGRESS action and call postWatcher", () => {
    expect(genObject.next().value).toEqual(
      takeLatest(DELETE_POST_IN_PROGRESS, deletePostInProgress)
    );
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe("postWatcher API tests", () => {
  describe("getPostListInProgress", () => {
    const dummyData = [
      { id: 1, title: "test title", body: "test content", userId: 10 },
    ];
    it("should call api and dispatch success action", async () => {
      const requestPosts = jest
        .spyOn(api, "getPosts")
        .mockImplementation(() => Promise.resolve(dummyData));

      const dispatched: any = [];

      const result = await runSaga(
        {
          dispatch: (action: any) => dispatched.push(action),
        },
        getPostListInProgress,
        ""
      );
      expect(requestPosts).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([postActions.getPostListInSuccess(dummyData)]);
      requestPosts.mockClear();
    });

    it("should call api and dispatch error action", async () => {
      const requestPosts = jest
        .spyOn(api, "getPosts")
        .mockImplementation(() => Promise.reject());

      const dispatched: any = [];

      const result = await runSaga(
        {
          dispatch: (action: any) => dispatched.push(action),
        },
        getPostListInProgress,
        ""
      );
      expect(requestPosts).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        postActions.getPostListInError("Problem with communicating server!."),
      ]);
      requestPosts.mockClear();
    });
  });

  describe("putPostInProgress", () => {
    const dummyData = {
      id: 1,
      title: "test title",
      body: "test content",
      userId: 10,
    };
    it("should call api and dispatch success action", async () => {
      const requestPutPost = jest
        .spyOn(api, "putPosts")
        .mockImplementation(() => Promise.resolve(dummyData));

      const dispatched: any = [];

      const result = await runSaga(
        {
          dispatch: (action: any) => dispatched.push(action),
        },
        putPostInProgress,
        ""
      );

      expect(requestPutPost).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        postActions.putPostInSuccess(
          "The post data was successfully submitted"
        ),
      ]);
      requestPutPost.mockClear();
    });

    it("should call api and dispatch error action", async () => {
      const requestPutPost = jest
        .spyOn(api, "putPosts")
        .mockImplementation(() => Promise.reject(dummyData));

      const dispatched: any = [];

      const result = await runSaga(
        {
          dispatch: (action: any) => dispatched.push(action),
        },
        putPostInProgress,
        ""
      );

      expect(requestPutPost).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        postActions.putPostInError("Problem with communicating server!."),
      ]);
      requestPutPost.mockClear();
    });
  });

  describe("deletePostInProgress", () => {
    const dummyData = {
      id: 1,
      title: "test title",
      body: "test content",
      userId: 10,
    };
    it("should call api and dispatch success action", async () => {
      const requestPutPost = jest
        .spyOn(api, "deletePosts")
        .mockImplementation(() => Promise.resolve(dummyData));

      const dispatched: any = [];

      const result = await runSaga(
        {
          dispatch: (action: any) => dispatched.push(action),
        },
        deletePostInProgress,
        ""
      );

      expect(requestPutPost).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        postActions.deletePostInSuccess("The post  was successfully deleted!"),
      ]);
      requestPutPost.mockClear();
    });

    it("should call api and dispatch error action", async () => {
      const requestPutPost = jest
        .spyOn(api, "deletePosts")
        .mockImplementation(() => Promise.reject(dummyData));

      const dispatched: any = [];

      const result = await runSaga(
        {
          dispatch: (action: any) => dispatched.push(action),
        },
        deletePostInProgress,
        ""
      );

      expect(requestPutPost).toHaveBeenCalledTimes(1);
      expect(dispatched).toEqual([
        postActions.deletePostInError("Problem with communicating server!."),
      ]);
      requestPutPost.mockClear();
    });
  });
});

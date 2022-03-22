import { takeLatest, call, put } from "redux-saga/effects";
import { deletePosts, getPosts, putPosts } from "../../../services";
import { handleApiErrors } from "../../../utilz/apiResponse";
import { postActions } from "../../actions";
import {
  DELETE_POST_IN_PROGRESS,
  GET_POSTS_IN_PROGRESS,
  PUT_POST_IN_PROGRESS,
} from "../../types/postsTypes";

function* getPostListInProgress(action: any): any {
  try {
    const data = yield call(getPosts, action.payload);
    yield put(postActions.getPostListInSuccess(data));
  } catch (e) {
    yield put(postActions.getPostListInError(handleApiErrors(e)));
  }
}

function* putPostInProgress(action: any): any {
  try {
    yield call(putPosts, action.payload);
    yield put(
      postActions.putPostInSuccess("The post data was successfully submitted")
    );
  } catch (e) {
    yield put(postActions.putPostInError(handleApiErrors(e)));
  }
}

function* deletePostInProgress(action: any): any {
  try {
    yield call(deletePosts, action.payload);
    yield put(
      postActions.deletePostInSuccess(
        "The post data was successfully submitted"
      )
    );
  } catch (e) {
    yield put(postActions.deletePostInError(handleApiErrors(e)));
  }
}

export function* postWatcher() {
  yield takeLatest(GET_POSTS_IN_PROGRESS, getPostListInProgress);
  yield takeLatest(PUT_POST_IN_PROGRESS, putPostInProgress);
  yield takeLatest(DELETE_POST_IN_PROGRESS, deletePostInProgress);
}

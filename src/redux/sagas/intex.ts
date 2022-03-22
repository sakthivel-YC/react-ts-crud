import { all } from "redux-saga/effects";
import { postWatcher } from "./post";

export default function* rootSaga() {
  yield all([postWatcher()]);
}

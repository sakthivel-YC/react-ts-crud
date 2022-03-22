import { combineReducers } from "redux";
import postReducer from "./posts";

const rootReducer = combineReducers({ post: postReducer });

export default rootReducer;

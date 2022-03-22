import {
  DELETE_POST_IN_ERROR,
  DELETE_POST_IN_PROGRESS,
  DELETE_POST_IN_SUCCESS,
  GET_POSTS_IN_ERROR,
  GET_POSTS_IN_PROGRESS,
  GET_POSTS_IN_SUCCESS,
  PUT_POST_IN_ERROR,
  PUT_POST_IN_PROGRESS,
  PUT_POST_IN_SUCCESS,
  RESET_FORM,
  SET_POST,
} from "../../types/postsTypes";

export const actions: any = {};

actions.getPostListInProgress = (payload: any) => {
  return {
    type: GET_POSTS_IN_PROGRESS,
    payload: payload,
  };
};

actions.getPostListInSuccess = (payload: any) => {
  return {
    type: GET_POSTS_IN_SUCCESS,
    payload: payload,
  };
};

actions.getPostListInError = (payload: any) => {
  return {
    type: GET_POSTS_IN_ERROR,
    payload: payload,
  };
};

actions.putPostInProgress = (payload: any) => {
  return {
    type: PUT_POST_IN_PROGRESS,
    payload: payload,
  };
};

actions.putPostInSuccess = (payload: any) => {
  return {
    type: PUT_POST_IN_SUCCESS,
    payload: payload,
  };
};

actions.putPostInError = (payload: any) => {
  return {
    type: PUT_POST_IN_ERROR,
    payload: payload,
  };
};

actions.setPost = (payload: any) => {
  return {
    type: SET_POST,
    payload: payload,
  };
};

actions.resetForm = () => {
  return {
    type: RESET_FORM,
  };
};

actions.deletePostInProgress = (payload: any) => {
  return {
    type: DELETE_POST_IN_PROGRESS,
    payload: payload,
  };
};

actions.deletePostInSuccess = (payload: any) => {
  return {
    type: DELETE_POST_IN_SUCCESS,
    payload: payload,
  };
};

actions.deletePostInError = (payload: any) => {
  return {
    type: DELETE_POST_IN_ERROR,
    payload: payload,
  };
};

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

interface defaultPrototype {
  data: any[];
  message: string | null;
  inProgress: Boolean;
  success: Boolean;
  error: Boolean;
}

const defaultProps: defaultPrototype = {
  data: [],
  message: null,
  inProgress: false,
  success: false,
  error: false,
};

interface statePrototype {
  list: defaultPrototype;
  put: defaultPrototype;
  setPost: any;
  delete: defaultPrototype;
}

const initialState: statePrototype = {
  list: { ...defaultProps },
  put: { ...defaultProps },
  setPost: null,
  delete: { ...defaultProps },
};

interface actionPrototype {
  type: string;
  payload: any;
}

const postReducer = (state = initialState, action: actionPrototype) => {
  switch (action.type) {
    case GET_POSTS_IN_PROGRESS: {
      return {
        ...state,
        list: { ...defaultProps, inProgress: true },
      };
    }

    case GET_POSTS_IN_SUCCESS: {
      return {
        ...state,
        list: { ...defaultProps, data: action.payload, success: true },
      };
    }

    case GET_POSTS_IN_ERROR: {
      return {
        ...state,
        list: {
          ...defaultProps,
          data: [],
          message: action.payload,
          error: true,
        },
      };
    }

    case PUT_POST_IN_PROGRESS: {
      return {
        ...state,
        put: { ...defaultProps, inProgress: true },
      };
    }

    case PUT_POST_IN_SUCCESS: {
      return {
        ...state,
        put: { ...defaultProps, message: action.payload, success: true },
      };
    }

    case PUT_POST_IN_ERROR: {
      return {
        ...state,
        put: { ...defaultProps, message: action.payload, error: true },
      };
    }
    case SET_POST: {
      return {
        ...state,
        setPost: action.payload,
      };
    }
    case RESET_FORM: {
      return {
        ...state,
        setPost: null,
        put: { ...defaultProps },
      };
    }

    case DELETE_POST_IN_PROGRESS: {
      return {
        ...state,
        delete: { ...defaultProps, inProgress: true },
      };
    }

    case DELETE_POST_IN_SUCCESS: {
      return {
        ...state,
        delete: { ...defaultProps, message: action.payload, success: true },
      };
    }

    case DELETE_POST_IN_ERROR: {
      return {
        ...state,
        delete: { ...defaultProps, message: action.payload, error: true },
      };
    }

    default:
      return state;
  }
};
export default postReducer;

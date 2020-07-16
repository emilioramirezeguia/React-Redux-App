import {
  FETCHING_JOKES,
  FETCHING_JOKES_SUCCESS,
  FETCHING_JOKES_FAILURE,
} from "../actions/actions";

const initialState = {
  isLoading: false,
  jokes: [],
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOKES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCHING_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
        error: "",
      };
    case FETCHING_JOKES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

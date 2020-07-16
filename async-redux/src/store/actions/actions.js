import axios from "axios";

// Action Types
export const FETCHING_JOKES = "FETCHING_JOKES";
export const FETCHING_JOKES_SUCCESS = "FETCHING_JOKES_SUCCESS";
export const FETCHING_JOKES_FAILURE = "FETCHING_JOKES_FAILURE";

// Action Creators

export const fetchJokes = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_JOKES });
    axios
      .get("https://official-joke-api.appspot.com/jokes/programming/random")
      .then((response) => {
        dispatch({ type: FETCHING_JOKES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCHING_JOKES_FAILURE, payload: error.message });
      });
  };
};

export const newJokes = () => {
  return (dispatch) => {
    axios
      .get("https://official-joke-api.appspot.com/jokes/programming/random")
      .then((response) => {
        dispatch({ type: FETCHING_JOKES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCHING_JOKES_FAILURE, payload: error.message });
      });
  };
};

import axios from "axios";

export const PLUS_COUNT = () => {
  return dispatch => {
    dispatch({ type: "PLUS_COUNT", payload: 10 });
  };
};

export const MINUS_COUNT = () => {
  return dispatch => {
    dispatch({ type: "MINUS_COUNT", payload: 10 });
  };
};

export const RESET_COUNT = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "RESET_COUNT", payload: 0 });
    }, 3000);
  };
};

export const FETCH_USERS = () => async dispatch => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({ type: "FETCH_USERS", payload: result.data });
};

import axios from "axios";
import {
  PLUS_COUNT,
  MINUS_COUNT,
  RESET_COUNT,
  FETCH_USERS,
} from "../constants/counter";

export const plus_count = () => {
  return (dispatch) => {
    dispatch({ type: PLUS_COUNT, payload: 10 });
  };
};

export const mimus_count = () => {
  return (dispatch) => {
    dispatch({ type: MINUS_COUNT, payload: 10 });
  };
};

export const reset_count = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: RESET_COUNT, payload: 0 });
    }, 3000);
  };
};

export const fetch_users = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({ type: FETCH_USERS, payload: result.data });
};

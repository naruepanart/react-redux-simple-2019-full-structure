import axios from "axios";

const initialState = {
  count: 100,
  fetchUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_COUNT":
      return { ...state, count: state.count + action.payload };
    case "MINUS_COUNT":
      return { ...state, count: state.count - action.payload };
    case "RESET_COUNT":
      return { ...state, count: action.payload };
    case "FETCH_USERS":
      return { ...state, fetchUsers: action.payload };
    default:
      return state;
  }
};

export const plus_count = () => ({ type: "PLUS_COUNT", payload: 10 });
export const mimus_count = () => ({ type: "MINUS_COUNT", payload: 10 });
export const reset_count = () => ({ type: "RESET_COUNT", payload: 0 });
export const fetch_users = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({ type: "FETCH_USERS", payload: result.data });
};

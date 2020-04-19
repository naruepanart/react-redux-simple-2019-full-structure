import {
  PLUS_COUNT,
  MINUS_COUNT,
  RESET_COUNT,
  FETCH_USERS,
} from "../constants/counter";

const initialState = {
  count: 100,
  fetchUsers: [],
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_COUNT:
      return { ...state, count: state.count + action.payload };
    case MINUS_COUNT:
      return { ...state, count: state.count - action.payload };
    case RESET_COUNT:
      return { ...state, count: action.payload };
    case FETCH_USERS:
      return { ...state, fetchUsers: action.payload };
    default:
      return state;
  }
};

export default MainReducer;

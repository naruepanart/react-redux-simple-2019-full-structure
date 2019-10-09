const initialState = {
  count: 100,
  fetchUsers: []
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS_COUNT":
      return { ...state, count: state.count + action.payload };
    case "MINUS_COUNT":
      return { ...state, count: state.count - action.payload };
    case "RESET_COUNT":
      return { ...state, count: action.payload };
    case "FETCH_USERS":
      return { ...state, fetchUsers: action.payload }
    default:
      return state;
  }
};

export default MainReducer;

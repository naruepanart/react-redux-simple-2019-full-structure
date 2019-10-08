const initialState = {
  count: 100
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLUS":
      return { ...state, count: state.count + action.payload };
    case "MINUS":
      return { ...state, count: state.count - action.payload };
    case "ZERO":
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default MainReducer;

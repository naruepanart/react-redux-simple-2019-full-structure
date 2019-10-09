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
    dispatch({ type: "RESET_COUNT", payload: 0 });
  };
};

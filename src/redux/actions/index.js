export const plusCount = () => {
  return {
    type: "PLUS_COUNT",
    payload: 10
  };
};

export const minusCount = () => {
  return {
    type: "MINUS_COUNT",
    payload: 10
  };
};

export const resetCount = () => {
  return {
    type: "RESET_COUNT",
    payload: 100
  };
};

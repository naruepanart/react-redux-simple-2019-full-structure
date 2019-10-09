import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { PLUS_COUNT, MINUS_COUNT, RESET_COUNT } from "./redux/actions";

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(PLUS_COUNT())}>PLUS </button>
      <button onClick={() => dispatch(MINUS_COUNT())}>MINUS</button>
      <button onClick={() => dispatch(RESET_COUNT())}>RESET</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Simple React - Redux 2019</h1>
      <Counter />
    </div>
  );
};

export default App;

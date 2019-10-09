import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { plusCount, minusCount, resetCount } from "./redux/actions";

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(plusCount())}>PLUS </button>
      <button onClick={() => dispatch(minusCount())}>MINUS</button>
      <button onClick={() => dispatch(resetCount())}>RESET</button>
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

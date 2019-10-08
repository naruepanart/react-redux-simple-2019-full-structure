import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Plus, Minus, Zero } from "./redux/actions";

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(Plus())}>PLUS </button>
      <button onClick={() => dispatch(Minus())}>MINUS</button>
      <button onClick={() => dispatch(Zero())}>Reset Count</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Simple React - Redux 2019</h1>
      <Counter />
    </div>
  );
}

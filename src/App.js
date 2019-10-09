import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  PLUS_COUNT,
  MINUS_COUNT,
  RESET_COUNT,
  FETCH_USERS
} from "./redux/actions";

const Counter = () => {
  const count = useSelector(state => state.count);
  const fetchUsers = useSelector(state => state.fetchUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(FETCH_USERS());
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(PLUS_COUNT())}>PLUS </button>
      <button onClick={() => dispatch(MINUS_COUNT())}>MINUS</button>
      <button onClick={() => dispatch(RESET_COUNT())}>RESET</button>

      <br></br>
      <br></br>

      <p>FETCH_USERS</p>
      {fetchUsers.map(users => {
        return (
          <div key={users.id}>
            id : {users.id} - name : {users.name} - city : {users.address.city}{" "}
            - phone : {users.phone}
          </div>
        );
      })}
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

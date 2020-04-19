import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  plus_count,
  mimus_count,
  reset_count,
  fetch_users
} from "./redux/ducks/counter";

const Counter = () => {
  const count = useSelector(state => state.count);
  const fetchUsers = useSelector(state => state.fetchUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetch_users());
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(plus_count())}>PLUS </button>
      <button onClick={() => dispatch(mimus_count())}>MINUS</button>
      <button onClick={() => dispatch(reset_count())}>RESET</button>

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
      <h1>Simple React - Redux 2020</h1>
      <Counter />
    </div>
  );
};

export default App;

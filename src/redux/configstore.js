import MainReducer from "./reducers/counter";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    MainReducer
});

export default allReducers;

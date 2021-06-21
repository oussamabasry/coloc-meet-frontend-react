import { combineReducers } from "redux";

import post from "./post";
import loggedReducer from "./isLogged";

export default combineReducers({
  post,
  login: loggedReducer,
});

import { combineReducers } from "redux";

import post from "./post";
import loggedReducer from "./isLogged";
import userPostsReducer from "./userPosts";

export default combineReducers({
  post,
  login: loggedReducer,
  userPosts: userPostsReducer,
});

import { combineReducers } from "redux";
import axios from "axios";
async function loginHandler(state, action) {
  console.log(action);
  switch (action.type) {
    case "LOGOUT":
      state.isLoggedIn = false;
      return state;
    case "LOGIN_USER":
      const user = { login: action.login, password: action.password };
      const resp = await fetch("http://localhost:5000/users/authorize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const js = await resp.json();
      console.log(js);
      return state;
    default:
  }
}

const rootReducer = loginHandler;

export default rootReducer;

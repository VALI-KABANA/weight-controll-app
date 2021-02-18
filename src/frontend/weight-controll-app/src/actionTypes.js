export const ADD_WEIGHT = "ADD_WEIGHT";
export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_NEW_PLOT = "GET_NEW_PLOT";

export function loginUser(user) {
  // user = {login: ..., password: ...}
  //
  return { type: LOGIN_USER, user };
}

export function createUser(user) {
  return { type: CREATE_USER, user };
}

export function logoutUser(user) {
  return { type: LOGOUT_USER, user };
}

export function addWeight(weight) {
  // weight = {date: ..., value: ...}
  return { type: ADD_WEIGHT, weight };
}

export function getNewPlot(time_segment) {
  // time_segment = {start: ..., end: ...}
  return { type: GET_NEW_PLOT, time_segment };
}

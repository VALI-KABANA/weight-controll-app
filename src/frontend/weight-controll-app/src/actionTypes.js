export const ADD_WEIGHT = "ADD_WEIGHT";
export const ADD_WEIGHT_RESPONSE = "ADD_WEIGHT_RESPONSE";
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_RESPONSE = "CREATE_USER_RESPONSE";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_RESPONSE = "LOGIN_RESPONSE";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_RESPONSE = "LOGOUT_USER_RESPONSE";
export const GET_NEW_PLOT = "GET_NEW_PLOT";
export const GET_NEW_PLOT_RESPONSE = "GET_NEW_PLOT_RESPONSE";

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

import React from "react";
import { createStore } from 'redux'

import {
  ADD_WEIGHT,
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_NEW_PLOT
} from './actionsTypes.js'


function todoApp(state = LOGIN_USER, action) {
   switch (action.type) {
    case ADD_WEIGHT:
      //todo link with DataBase
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case CREATE_USER:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
     case LOGIN_USER:
       return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
      case LOGOUT_USER:
       return  Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      }) 
      case GET_NEW_PLOT:
       return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }

class Store extend React.Component {
  constructor(props){
    super(props);
    props = {

    }
  }
  const isLoggedIn = props.isLoggedIn;
  const toSignUp = props.toSignUp;
  if (isLoggedIn) {
    return <Graph />;
  } else if (toSignUp) {
    return <SignUp />;
  } else return <SignIn />;
}

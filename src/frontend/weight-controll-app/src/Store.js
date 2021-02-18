import React from "react";
import { createStore } from 'redux'
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

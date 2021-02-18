import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import WeightForm from "./components/WeightForm";

const App = () => {
  return <WeightForm />;
  //todo return <SignUp />;
  //else return <SignIn />;
};
export default App;

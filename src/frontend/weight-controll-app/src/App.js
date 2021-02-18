import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import WeightForm from "./components/WeightForm";
import Graph from "./components/Graph";
import TimeSegment from "./components/TimeSegment";

const App = () => {
  return <TimeSegment />;
  //todo return <SignUp />;
  //else return <SignIn />;
};
export default App;

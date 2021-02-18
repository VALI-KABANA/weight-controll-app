import React, { Component } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import WeightForm from "./components/WeightForm";
import Graph from "./components/Graph";
import TimeSegment from "./components/TimeSegment";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      ShowSignIn: true,
      ShowSignUp: false,
      ShowGraph: false,
      ShowWeightForm: false,
      ShowTimeSegment: false,
      Session: 0,
      Username: 0,
      Data: [],
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(name, value) {
    switch (name) {
      case "SignIn":
        this.setState({ ShowSignIn: value });
        break;
      case "SignUp":
        this.setState({ ShowSignUp: value });
        break;
      case "Graph":
        this.setState({ ShowGraph: value });
        break;
      case "WeightForm":
        this.setState({ ShowWeightForm: value });
        break;
      case "Username":
        this.setState({ Username: value });
        break;
      case "Session":
        this.setState({ Session: value });
        break;
      case "TimeSegment":
        this.setState({ ShowTimeSegment: value });
        break;
      default:
    }
  }
  render() {
    const {
      ShowSignUp,
      ShowSignIn,
      ShowGraph,
      ShowWeightForm,
      ShowTimeSegment,
    } = this.state;
    return (
      <div>
        {ShowSignUp && <SignUp />}
        {ShowSignIn && <SignIn />}
        {ShowGraph && <Graph />}
        {ShowWeightForm && <WeightForm />}
        {ShowTimeSegment && <TimeSegment />}
      </div>
    );
  }
}

//todo return <SignUp />;
//else return <SignIn />;
export default App;

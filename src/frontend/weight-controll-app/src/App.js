import React, { Component } from "react";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Graph from "./components/Graph";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      show: "SignIn",
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
    const { show } = this.state;
    return (
      <div>
        {show === "SignUp" && <SignUp />}
        {show === "SignIn" && <SignIn />}
        {show === "Graph" && <Graph />}
      </div>
    );
  }
}

export default App;

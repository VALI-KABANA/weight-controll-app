import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default App;

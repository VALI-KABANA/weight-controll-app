import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/SignUp">SignUp</NavLink>
      <NavLink to="/SignIn">SignIn</NavLink>
    </div>
  );
};

export default Navigation;

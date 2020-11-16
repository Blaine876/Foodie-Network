import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Splash from "../pages/Splash";
import AddMeal from "../pages/AddMeal";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/addmeal" component={AddMeal} />
      <Route exact path="/splash" component={Splash} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;

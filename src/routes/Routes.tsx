import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Splash from "../pages/Splash";
import AddMeal from "../pages/AddMeal";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Details from "../pages/Details";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/addmeal" component={AddMeal} />
      <Route path="/splash" component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/details" component={Details} />
    </Switch>
  );
};

export default Routes;

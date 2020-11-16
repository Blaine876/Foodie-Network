import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Splash from "../pages/Splash";
import AddMeal from "../pages/AddMeal";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/addmeal" component={AddMeal} />
      <Route exact path="/splash" component={Splash} />
    </Switch>
  );
};

export default Routes;

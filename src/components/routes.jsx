import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projets" component={Projects} />
    </Switch>
  );
}

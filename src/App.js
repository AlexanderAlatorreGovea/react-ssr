import React from "react";
import { Switch, Route } from "react-router";
import HomePage from "./pages/HomePage";

const App = (props) => (
  <div>
    <Switch>
      <Route path="/" render={(props) => <HomePage {...props} />} />
    </Switch>
  </div>
);

export default App;

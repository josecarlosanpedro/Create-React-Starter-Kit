import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Modules/Main";
import Home from "../Modules/Home";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/Home" component={Home} exact />
      </Switch>
    );
  }
}

export default Routes;
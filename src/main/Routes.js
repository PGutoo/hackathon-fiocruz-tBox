import React from "react";
import { Route, Switch } from "react-router-dom";

import Contador from "../view/Contador";
import Alarm from "../view/Alarm";
import Perfil from "../view/Perfil";
import Login from "../view/Login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Contador} />
      <Route exact path="/Alarm" component={Alarm} />
      <Route exact path="/Perfil" component={Perfil} />
      <Route exact path="/Login" component={Login}/>
    </Switch>
  );
}

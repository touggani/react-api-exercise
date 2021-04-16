import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./Menu";
import Exercice1 from "./Exercice1";
import Exercice2 from "./Exercice2";
import Exercice3 from "./Exercice3";
import Exercice4 from "./Exercice4";
import Exercice5 from "./Exercice5";
import Exercice6 from "./Exercice6";
import Country from "./Country";

import "./styles.css";

const App = props => {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/exercice/1" component={Exercice1} />
        <Route path="/exercice/2" component={Exercice2} />
        <Route path="/exercice/3" component={Exercice3} />
        <Route path="/exercice/4" component={Exercice4} />
        <Route path="/exercice/5" component={Exercice5} />
        <Route path="/exercice/6" component={Exercice6} />
        <Route path="/country/:name" component={Country} />
      </Switch>
    </div>
  );
};

export default App;

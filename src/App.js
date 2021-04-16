import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./Menu";
import Country from "./Country";

import "./styles.css";

const App = (props) => {
  return (
    <div className="App">
      <Menu />
      <Switch>
        <Route path="/country/:name" component={Country} />
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Menu = props => {
  return (
    <div>
      <Link to="/exercice/1">Ex1</Link>
      <Link to="/exercice/2">Ex2</Link>
      <Link to="/exercice/3">Ex3</Link>
      <Link to="/exercice/4">Ex4</Link>
      <Link to="/exercice/5">Ex5</Link>
      <Link to="/exercice/6">Ex6</Link>
      <Link to="/country/France">France</Link>
      <Link to="/country/Germany">Allemagne</Link>
      <Link to="/country/Canada">Canada</Link>
    </div>
  );
};

export default Menu;

import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Menu = (props) => {
  return (
    <div>
      <Link to="/country/France">France</Link>
      <Link to="/country/Germany">Allemagne</Link>
      <Link to="/country/Canada">Canada</Link>
    </div>
  );
};

export default Menu;

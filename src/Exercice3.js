import React from "react";

import Button from "@material-ui/core/Button";

const Exercice3 = props => {
  return (
    <div>
      <h1>Exercice 3</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => console.log("has been clicked")}
      >
        Secondary
      </Button>
    </div>
  );
};

export default Exercice3;

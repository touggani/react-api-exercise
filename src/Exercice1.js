import React from "react";

import CustomButton from "./CustomButton";

const Exercice1 = props => {
  return (
    <div>
      <h1>Exercice 1</h1>
      <CustomButton
        text="Click-me !"
        action={function(e) {
          alert("has been clicked");
        }}
      />
    </div>
  );
};

export default Exercice1;

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import "./styles.css";

const NewPeople = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  return (
    <div>
      <TextField
        id="lastName"
        value={lastName}
        label="Prénom"
        margin="normal"
        onChange={e => handleLastNameChange(e)}
      />
      <TextField
        id="firstName"
        value={firstName}
        label="Nom"
        margin="normal"
        onChange={e => handleFirstNameChange(e)}
      />
      <p>
        Bonjour {firstName} {lastName}
      </p>
    </div>
  );
}

export default NewPeople;

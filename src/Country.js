import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = props => {
  const [countryFromUrl, setCountryFromUrl] = useState("");
  const [topLevelDomain, setTopLevelDomain] = useState("");
  const [capital, setCapital] = useState("");
  const [population, setPopulation] = useState(0);

  useEffect(() => {
    setCountryFromUrl(props.match.params.name);
  }, [props.match.params.name]);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/name/" + countryFromUrl)
      .then(result => {
        const country = result.data[0];
        setTopLevelDomain(country.topLevelDomain);
        setCapital(country.capital);
        setPopulation(country.population);
      });
  }, [countryFromUrl]);

  return (
    <div>
      <h1>{countryFromUrl}</h1>
      Domaine web : <b>{topLevelDomain}</b>
      <br />
      Capitale : <b>{capital}</b>
      <br />
      Population : <b>{population}</b>
      <br />
    </div>
  );
};

export default Country;

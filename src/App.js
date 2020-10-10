import React, { useEffect, useState } from "react";
import { MenuItem, Select, FormControl } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountrieData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) =>
        response.json().then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        })
      );
    };
    getCountrieData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Track the COVID 19</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {/*   <MenuItem value="worldwide">Worldwide</MenuItem>
            
            <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Worldwide</MenuItem> */}
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;

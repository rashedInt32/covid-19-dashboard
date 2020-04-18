import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { element } from 'prop-types';
import to from 'await-to-js';

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [myCountry, setMyCountry] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);

  useEffect(() => {
    getMyCountry();
  }, []);

  const getMyCountry = async () => {
    const [err, response] = await to(
      axios.get('https://extreme-ip-lookup.com/json'),
    );
    if (err) return;
    setMyCountry(response.data);
  };

  const updateCountries = value => setCountries(value);
  const updateSelectedCountry = value => setSelectedCountry(value);

  return (
    <CountryContext.Provider
      value={{
        myCountry,
        updateCountries,
        countries,
        selectedCountry,
        updateSelectedCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

CountryContextProvider.propTypes = {
  children: element,
};

export default CountryContextProvider;

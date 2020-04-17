import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { element } from 'prop-types';
import to from 'await-to-js';

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [myCountry, setMyCountry] = useState({});
  const [countries, setCountries] = useState([]);

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

  return (
    <CountryContext.Provider value={{ myCountry, updateCountries, countries }}>
      {children}
    </CountryContext.Provider>
  );
};

CountryContextProvider.propTypes = {
  children: element,
};

export default CountryContextProvider;

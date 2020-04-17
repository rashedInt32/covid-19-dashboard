import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { element } from 'prop-types';
import to from 'await-to-js';

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [myCountry, setMyCountry] = useState({});

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

  return (
    <CountryContext.Provider value={{ myCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

CountryContextProvider.propTypes = {
  children: element,
};

export default CountryContextProvider;

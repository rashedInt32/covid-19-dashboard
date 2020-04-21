/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import Router from 'containers/Router';
import CountryContextProvider from 'containers/Context/CountryContext';

import GlobalStyle from '../../theme/globalStyles';
import Theme from '../../theme';

export default function App() {
  return (
    <>
      <CountryContextProvider>
        <ThemeProvider theme={Theme}>
          <Router />
        </ThemeProvider>
      </CountryContextProvider>
      <GlobalStyle />
    </>
  );
}

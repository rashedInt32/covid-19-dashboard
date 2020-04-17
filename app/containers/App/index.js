/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import Router from 'containers/Router';
import CountryContextProvider from 'containers/Context/CountryContext';

import { initializeFirebase } from 'firebase/initializeFirebase';

import GlobalStyle from '../../theme/globalStyles';
import Theme from '../../theme';

export default function App() {
  useEffect(() => {
    initializeFirebase();
  }, []);

  return (
    <MuiThemeProvider theme={Theme}>
      <ThemeProvider theme={Theme}>
        <CountryContextProvider>
          <Router />
        </CountryContextProvider>
      </ThemeProvider>
      <GlobalStyle />
    </MuiThemeProvider>
  );
}

import React from 'react';
import { array, object, oneOfType, string } from 'prop-types';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    alignItems: 'stretch',
    display: 'flex',
  },
  main: {
    position: 'relative',
    background: `${theme.colors.lightBg}`,
    padding: '20px',
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
  },
}));

const Layout = ({ children, country, active }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <CssBaseline />
      <main className={classes.main}>
        <Header country={country} active={active} />
        {children}
      </main>
    </Container>
  );
};

Layout.propTypes = {
  children: oneOfType([array, object]),
  country: string,
  active: string,
};

export default Layout;

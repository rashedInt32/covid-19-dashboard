import React from 'react';
import { array, object, oneOfType } from 'prop-types';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Sidebar from './Sidebar';

const useStyles = makeStyles(theme => ({
  container: {
    padding: 0,
    alignItems: 'stretch',
    height: `100vh`,
    display: 'flex',
  },
  main: {
    position: 'relative',
    background: `${theme.colors.lightBg}`,
    borderTopLeftRadius: `${theme.borderRadiusLarge}`,
    borderBottomLeftRadius: `${theme.borderRadiusLarge}`,
    padding: '20px',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <CssBaseline />
      <Sidebar />
      <main className={classes.main}>
        <Header />
        {children}
      </main>
    </Container>
  );
};

Layout.propTypes = {
  children: oneOfType([array, object]),
};

export default Layout;

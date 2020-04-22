import React from 'react';
import styled from 'styled-components';
import { element, string, object } from 'prop-types';

import Header from './Header';

const Main = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.lightBg};
  padding: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  @media (min-width: 991px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;

const Layout = ({ children, country, active }) => (
  <Main>
    <Header country={country} active={active} />
    {children}
  </Main>
);

Layout.propTypes = {
  children: element,
  country: object,
  active: string,
};

export default Layout;

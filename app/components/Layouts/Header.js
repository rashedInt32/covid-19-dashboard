import React, { useContext } from 'react';
import { object, string } from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import logo from 'images/logo.svg';
import messages from './messages';
import { CountryContext } from '../../containers/Context/CountryContext';

const Content = styled.div`
  position: relative;
  display: flex;
  padding-top: 10px;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  margin-right: 30px;
  @media (max-width: 576px) {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
`;

const Text = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-right: 15px;
  color: ${({ theme, colored }) =>
    colored ? theme.colors.primary : theme.colors.secondary};

  @media (max-width: 576px) {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const Header = ({ intl, country, active }) => {
  const { myCountry } = useContext(CountryContext);
  return (
    <Content>
      <Logo src={logo} />
      <Text colored>{intl.formatMessage(messages.header)}</Text>
      {active !== 'My Country' ? (
        <Text>
          {country === '' ? `Global - ${active}` : `${country} - ${active}`}
        </Text>
      ) : (
        <Text>{myCountry.country}</Text>
      )}
    </Content>
  );
};

Header.propTypes = {
  intl: object,
  country: string,
  active: string,
};

export default injectIntl(Header);

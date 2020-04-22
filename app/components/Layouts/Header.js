import React, { useContext } from 'react';
import { object, string } from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import _ from 'lodash';

import logo from 'images/logo.svg';
import messages from './messages';
import { CountryContext } from '../../containers/Context/CountryContext';

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (min-width: 576px) {
    padding-top: 10px;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  margin-right: 20px;
  @media (max-width: 576px) {
    margin-right: 5px;
    width: 40px;
    height: 49px;
  }
`;

const Text = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-right: 15px;
  color: ${({ theme, colored }) =>
    colored ? theme.colors.primary : theme.colors.secondary};

  @media (max-width: 576px) {
    font-size: 15px;
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
          {_.isEmpty(country) ? `Global - ${active}` : `${country.country} - ${active}`}
        </Text>
      ) : (
        <Text>{myCountry.country}</Text>
      )}
    </Content>
  );
};

Header.propTypes = {
  intl: object,
  country: object,
  active: string,
};

export default injectIntl(Header);

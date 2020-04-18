import React, { useContext } from 'react';
import { object, string } from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import messages from './messages';
import { CountryContext } from '../../containers/Context/CountryContext';

const Content = styled.div`
  position: relative;
  display: flex;
  padding-top: 10px;
`;

const Text = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-right: 15px;
  color: ${({ theme, colored }) =>
    colored ? theme.colors.primary : theme.colors.secondary};
`;

const Header = ({ intl, country, active }) => {
  const { myCountry } = useContext(CountryContext);
  return (
    <Content>
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

import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import messages from './messages';

const Content = styled.div`
  position: relative;
`;

const Text = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme, colored }) =>
    colored ? theme.colors.primary : theme.colors.secondary};
`;

const Header = ({ intl }) => (
  <Content>
    <Text colored>{intl.formatMessage(messages.header)}</Text>
    <Text>{intl.formatMessage(messages.subHeader)}</Text>
  </Content>
);

Header.propTypes = {
  intl: object,
};

export default injectIntl(Header);

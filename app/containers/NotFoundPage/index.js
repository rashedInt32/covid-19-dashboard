import React from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';

import Layout from 'components/Layouts';

import messages from './messages';

function NotFound({ intl }) {
  return (
    <Layout>
      <h1>{intl.formatMessage(messages.header)}</h1>
    </Layout>
  );
}

NotFound.propTypes = {
  intl: object,
};

export default injectIntl(NotFound);

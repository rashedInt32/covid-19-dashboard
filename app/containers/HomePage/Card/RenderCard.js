import React, { useContext } from 'react';
import { object } from 'prop-types';
import { ThemeContext } from 'styled-components';
import { injectIntl } from 'react-intl';

import messages from 'containers/HomePage/messages';
import Card from 'components/Card';
import { getPercent } from 'utils/percent';

import CardWrapper from './CardWrapper';

const RenderCard = ({ intl, data }) => {
  const themeContext = useContext(ThemeContext);

  const percent = value => {
    if (data.latest && data.previous) {
      return getPercent(data.latest, data.previous, value);
    }
    return 0;
  };

  return (
    <CardWrapper>
      <Card
        title={intl.formatMessage(messages.confirm)}
        value={data.latest.cases}
        color={themeContext.colors.danger}
        percent={percent('cases')}
      />
      <Card
        title={intl.formatMessage(messages.active)}
        value={data.latest.active}
        color={themeContext.colors.warning}
        percent={percent('active')}
      />
      <Card
        title={intl.formatMessage(messages.recovered)}
        value={data.latest.recovered}
        color={themeContext.colors.success}
        percent={percent('recovered')}
      />
      <Card
        title={intl.formatMessage(messages.deaths)}
        value={data.latest.deaths}
        color={themeContext.colors.primary}
        percent={percent('deaths')}
      />

    </CardWrapper>
  );
};

RenderCard.propTypes = {
  data: object,
  intl: object,
};

export default injectIntl(RenderCard);
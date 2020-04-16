import React, { useContext } from 'react';
import { object, bool } from 'prop-types';
import { ThemeContext } from 'styled-components';
import { injectIntl } from 'react-intl';
import _ from 'lodash';

import messages from 'containers/HomePage/messages';
import Card from 'components/Card';
import { getPercent } from 'utils/percent';

import CardWrapper from './CardWrapper';

const RenderCard = ({ intl, data, today }) => {
  const themeContext = useContext(ThemeContext);

  const percent = value => {
    if (data.latest && data.previous) {
      return getPercent(data.latest, data.previous, value);
    }
    return 0;
  };

  return (
    <>
      {!_.isEmpty(data) && (
        <CardWrapper>
          <Card
            title={intl.formatMessage(messages.confirm)}
            value={data.latest.cases}
            color={themeContext.colors.danger}
            percent={percent('cases')}
          />
          {today && (
            <Card
              title={intl.formatMessage(messages.critical)}
              value={data.latest.critical}
              color={themeContext.colors.warning}
              percent={percent('critical')}
            />
          )}
          {!today && (
            <>
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
            </>
          )}

          <Card
            title={intl.formatMessage(messages.deaths)}
            value={data.latest.deaths}
            color={themeContext.colors.primary}
            percent={percent('deaths')}
          />
        </CardWrapper>
      )}
    </>
  );
};

RenderCard.propTypes = {
  data: object,
  intl: object,
  today: bool,
};

export default injectIntl(RenderCard);

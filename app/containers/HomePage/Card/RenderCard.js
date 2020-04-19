import React, { useContext } from 'react';
import { object, bool } from 'prop-types';
import { ThemeContext } from 'styled-components';
import { injectIntl } from 'react-intl';
import _ from 'lodash';
import { Grid } from '@material-ui/core';

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
    <CardWrapper>
      <Grid container spacing={2}>
        <Card
          title={intl.formatMessage(messages.confirm)}
          value={!_.isEmpty(data) ? data.latest.cases : null}
          color={themeContext.colors.danger}
          percent={percent('cases')}
        />
        {today && (
          <Card
            title={intl.formatMessage(messages.critical)}
            value={!_.isEmpty(data) ? data.latest.critical : null}
            color={themeContext.colors.warning}
            percent={percent('critical')}
          />
        )}
        {!today && (
          <>
            <Card
              title={intl.formatMessage(messages.active)}
              value={!_.isEmpty(data) ? data.latest.active : null}
              color={themeContext.colors.warning}
              percent={percent('active')}
            />
            <Card
              title={intl.formatMessage(messages.recovered)}
              value={!_.isEmpty(data) ? data.latest.recovered : null}
              color={themeContext.colors.success}
              percent={percent('recovered')}
            />
          </>
        )}

        <Card
          title={intl.formatMessage(messages.deaths)}
          value={!_.isEmpty(data) ? data.latest.deaths : null}
          color={themeContext.colors.primary}
          percent={percent('deaths')}
        />
      </Grid>
    </CardWrapper>
  );
};

RenderCard.propTypes = {
  data: object,
  intl: object,
  today: bool,
};

export default injectIntl(RenderCard);

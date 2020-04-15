import React, { useEffect, useState, useContext } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';
import { ThemeContext } from 'styled-components';

import Layout from 'components/Layouts';
import TabButton from 'components/TabButton';
import Card from 'components/Card';

import { getAllCases } from './HomeApi';

import TabWrapper from './Tab/TabWrapper';
import CardWrapper from './Card/CardWrapper';

import messages from './messages';

function HomePage({ intl }) {
  const themeContext = useContext(ThemeContext);

  const tabs = [
    intl.formatMessage(messages.overall),
    intl.formatMessage(messages.today),
    intl.formatMessage(messages.yesterday),
  ];

  const [data, setData] = useState({ latest: {}, previous: {} });

  const [activeTab, setActiveTab] = useState(
    new Set([intl.formatMessage(messages.overall)]),
  );

  useEffect(() => {
    getLatestData();
  }, []);

  const getLatestData = async () => {
    const [err, latest] = await getAllCases();
    const [error, previous] = await getAllCases({ yesterday: true });
    if (err || error) return;
    setData({ latest: latest.data, previos: previous.data });
  };

  const handleTabChange = tab => setActiveTab(new Set([tab]));

  return (
    <Layout>
      <TabWrapper>
        {tabs.map(t => (
          <TabButton
            key={t}
            onClick={() => handleTabChange(t)}
            active={activeTab.has(t)}
          >
            {t}
          </TabButton>
        ))}
      </TabWrapper>
      <CardWrapper>
        <Card
          title={intl.formatMessage(messages.confirm)}
          value={data.latest.cases}
          color={themeContext.colors.primary}
          percent={23}
        />
        <Card
          title={intl.formatMessage(messages.active)}
          value={data.latest.active}
          color={themeContext.colors.warning}
          percent={23}
        />
        <Card
          title={intl.formatMessage(messages.recovered)}
          value={data.latest.recovered}
          color={themeContext.colors.success}
          percent={23}
        />
        <Card
          title={intl.formatMessage(messages.deaths)}
          value={data.latest.deaths}
          color={themeContext.colors.danger}
          percent={23}
        />
      </CardWrapper>
    </Layout>
  );
};

HomePage.propTypes = {
  intl: object,
}

export default injectIntl(HomePage);

import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';

import Layout from 'components/Layouts';
import TabButton from 'components/TabButton';

import { getAllCases } from './HomeApi';

import TabWrapper from './Tab/TabWrapper';
import RenderCard from './Card/RenderCard';

import messages from './messages';

function HomePage({ intl }) {
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
    setData({
      latest: latest.data,
      previous: previous.data,
      loading: false,
    });
  };

  const handleTabChange = tab => setActiveTab(new Set([tab]));

  const { latest, previous } = data;

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
      <RenderCard data={{ latest, previous }} />
    </Layout>
  );
}

HomePage.propTypes = {
  intl: object,
};

export default injectIntl(HomePage);

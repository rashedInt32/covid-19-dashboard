import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';

import Layout from 'components/Layouts';
import TabButton from 'components/TabButton';

import { getAllCases } from './HomeApi';
import { renderableData } from './renderableData';

import TabWrapper from './Tab/TabWrapper';
import RenderCard from './Card/RenderCard';

import messages from './messages';

function HomePage({ intl }) {
  const tabs = [
    intl.formatMessage(messages.overall),
    intl.formatMessage(messages.yesterday),
    intl.formatMessage(messages.today),
  ];

  const [data, setData] = useState({});
  const [renderData, setRenderData] = useState({});
  const [isToday, setIsToday] = useState(false);

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
    setRenderData(renderableData(latest.data, previous.data, false));
  };

  const handleTabChange = tab => {
    setActiveTab(new Set([tab]));
    const { latest, previous } = data;

    switch (tab) {
      case intl.formatMessage(messages.today):
        setRenderData(renderableData(latest, previous, true));
        setIsToday(true);
        break;
      case intl.formatMessage(messages.yesterday):
        setRenderData(renderableData(previous, latest, false));
        setIsToday(false);
        break;
      default:
        setRenderData(renderableData(latest, previous, false));
        setIsToday(false);
    }
  };

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
      <RenderCard data={renderData} today={isToday} />
    </Layout>
  );
}

HomePage.propTypes = {
  intl: object,
};

export default injectIntl(HomePage);

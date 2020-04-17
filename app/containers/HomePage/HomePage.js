import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

import Layout from 'components/Layouts';
import TabButton from 'components/TabButton';
import { miliseconds } from 'utils/miliseconds';

import { getAllCases, getAllCountries } from './HomeApi';
import { renderableData } from './renderableData';

import TabWrapper from './Tab/TabWrapper';
import RenderCard from './Card/RenderCard';

import messages from './messages';

function HomePage({ intl }) {
  const tabs = [
    intl.formatMessage(messages.overall),
    intl.formatMessage(messages.yesterday),
    intl.formatMessage(messages.today),
    intl.formatMessage(messages.myCountry),
  ];
  let interval;
  const refecthDataTime = 660000;

  const [data, setData] = useState({});
  const [allCountires, setAllCountries] = useState([]);
  const [renderData, setRenderData] = useState({});
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [activeTab, setActiveTab] = useState(
    new Set([intl.formatMessage(messages.overall)]),
  );

  useEffect(() => {
    getLatestData();
    return () => clearInterval(interval);
  }, [shouldFetchData]);

  const getLatestData = async () => {
    const [err, latest] = await getAllCases();
    const [error, previous] = await getAllCases({ yesterday: true });
    const [e, countries] = await getAllCountries();
    if (err || error || e) return;

    setData({
      latest: latest.data,
      previous: previous.data,
      loading: false,
    });

    setAllCountries(countries.data);

    setRenderData(renderableData(latest.data, previous.data, false));

    if (latest.data) {
      const lastUpdated = moment(latest.data.updated).fromNow('mm');
      const minutesAgo = lastUpdated.split(' ')[0];
      refetchData(minutesAgo);
    }
  };

  const refetchData = time => {
    const remainingSecond = refecthDataTime - miliseconds(time);
    interval = setInterval(() => {
      setShouldFetchData(!shouldFetchData);
    }, remainingSecond);
  };

  const handleTabChange = tab => {
    setActiveTab(new Set([tab]));
    const { latest, previous } = data;

    switch (tab) {
      case intl.formatMessage(messages.today):
        setRenderData(renderableData(latest, previous, true));
        setData({ ...data, today: true });
        break;
      case intl.formatMessage(messages.yesterday):
        setRenderData(renderableData(previous, latest, false));
        setData({ ...data, today: false });
        break;
      default:
        setRenderData(renderableData(latest, previous, false));
        setData({ ...data, today: false });
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
      <RenderCard data={renderData} today={data.today} />
    </Layout>
  );
}

HomePage.propTypes = {
  intl: object,
};

export default injectIntl(HomePage);

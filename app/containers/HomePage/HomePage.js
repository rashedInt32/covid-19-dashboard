import React, { useEffect, useState, useContext } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';
import _ from 'lodash';

import Layout from 'components/Layouts';
import TabButton from 'components/TabButton';
import { miliseconds } from 'utils/miliseconds';

import { getAllCases, getAllCountries } from './HomeApi';
import { renderableData } from './renderableData';

import TabWrapper from './Tab/TabWrapper';
import RenderCard from './Card/RenderCard';

import messages from './messages';
import { CountryContext } from '../Context/CountryContext';

function HomePage({ intl }) {
  const { myCountry } = useContext(CountryContext);

  const tabs = [
    intl.formatMessage(messages.overall),
    intl.formatMessage(messages.myCountry),
    intl.formatMessage(messages.yesterday),
    intl.formatMessage(messages.today),
  ];
  let interval;
  const refecthDataTime = 660000;

  const [data, setData] = useState({});
  const [countries, setCountries] = useState([]);
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
    const [e, response] = await getAllCountries();
    if (err || error || e) return;

    setData({
      latest: latest.data,
      previous: previous.data,
      loading: false,
    });

    setCountries(response.data);
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

  const getMyCountryData = () => {
    const country = _.find(countries, c => c.country === myCountry.country);
    return country;
  };

  const handleTabChange = tab => {
    setActiveTab(new Set([tab]));
    const { latest, previous } = data;

    switch (tab) {
      case intl.formatMessage(messages.today):
        setRenderData(renderableData(latest, previous, true));
        setData({ ...data, today: true, myCountry: false });
        break;
      case intl.formatMessage(messages.yesterday):
        setRenderData(renderableData(previous, latest, false));
        setData({ ...data, today: false, myCountry: false });
        break;
      case intl.formatMessage(messages.myCountry):
        setRenderData(renderableData(getMyCountryData(), previous, false));
        setData({ ...data, today: false, myCountry: true });
        break;
      default:
        setRenderData(renderableData(latest, previous, false));
        setData({ ...data, today: false, myCountry: false });
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
      <RenderCard
        data={renderData}
        today={data.today}
        myCountry={data.myCountry}
      />
    </Layout>
  );
}

HomePage.propTypes = {
  intl: object,
};

export default injectIntl(HomePage);

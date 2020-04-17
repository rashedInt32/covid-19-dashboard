import React, { useEffect, useState, useContext } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

import Layout from 'components/Layouts';
import TabButton from 'components/TabButton';
import { miliseconds } from 'utils/miliseconds';

import { getAllCases, getAllCountries } from './HomeApi';
import { renderableData } from './renderableData';
import { getCountry } from './homeUtils/getCountry';

import TabWrapper from './Tab/TabWrapper';
import RenderCard from './Card/RenderCard';
import CountryDropdown from './CountryDropdown';

import messages from './messages';
import { CountryContext } from '../Context/CountryContext';

function HomePage({ intl }) {
  const { myCountry, updateCountries } = useContext(CountryContext);

  const tabs = [
    intl.formatMessage(messages.overall),
    intl.formatMessage(messages.myCountry),
    intl.formatMessage(messages.yesterday),
    intl.formatMessage(messages.today),
    intl.formatMessage(messages.selectCountry),
  ];
  let interval;
  const refecthDataTime = 660000;

  const [data, setData] = useState({});
  const [countries, setCountries] = useState({});
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
    const [, countryLatest] = await getAllCountries();
    const [, countryPrev] = await getAllCountries({ yesterday: true });
    if (err || error) return;

    setData({
      latest: latest.data,
      previous: previous.data,
      loading: false,
    });

    setCountries({
      latest: countryLatest.data,
      previous: countryPrev.data,
    });
    updateCountries(countryLatest.data);
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

  const getMyCountry = getCountry(countries, myCountry);

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
        setRenderData(
          renderableData(getMyCountry.latest, getMyCountry.previous, false),
        );
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
      <CountryDropdown countries={countries.latest} onClick={() => {}} />
    </Layout>
  );
}

HomePage.propTypes = {
  intl: object,
};

export default injectIntl(HomePage);

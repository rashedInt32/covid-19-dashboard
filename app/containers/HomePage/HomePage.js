import React, { useEffect, useState, useContext } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

import Layout from 'components/Layouts';
import TabButton from 'components/TabButton';
import { miliseconds } from 'utils/miliseconds';
import DrawBarChart from 'components/Chart/BarChart';

import {
  getAllCases,
  getAllCountries,
  getAllHistorical,
  getAllHistoricalByCountry,
} from './HomeApi';
import { renderableData } from './renderableData';
import { getCountry } from './homeUtils/getCountry';

import TabWrapper from './Tab/TabWrapper';
import RenderCard from './Card/RenderCard';
import CountryDropdown from './CountryDropdown';

import messages from './messages';
import { CountryContext } from '../Context/CountryContext';

function HomePage({ intl }) {
  const { myCountry } = useContext(CountryContext);

  const tabs = [
    intl.formatMessage(messages.overall),
    intl.formatMessage(messages.yesterday),
    intl.formatMessage(messages.today),
    intl.formatMessage(messages.myCountry),
  ];
  let interval;
  const refecthTime = 660000;

  const [data, setData] = useState({});
  const [countries, setCountries] = useState({});
  const [country, setCountry] = useState('');
  const [historical, setHistorical] = useState({});
  const [renderData, setRenderData] = useState({});
  const [shouldFetch, setShouldFetch] = useState(false);
  const [activeTab, setActiveTab] = useState(new Set([tabs[0]]));

  useEffect(() => {
    getWorldWideCases();
    getCasesByCountries();
    return () => clearInterval(interval);
  }, [shouldFetch]);

  useEffect(() => {
    getHistorical();
  }, []);

  const getWorldWideCases = async () => {
    const [err, latest] = await getAllCases();
    const [error, previous] = await getAllCases({ yesterday: true });
    if (err || error) return;

    setData({
      latest: latest.data,
      previous: previous.data,
      loading: false,
    });

    setRenderData(renderableData(latest.data, previous.data, false));

    if (latest.data) {
      const lastUpdated = moment(latest.data.updated).fromNow('mm');
      const minutesAgo = lastUpdated.split(' ')[0];
      refetch(minutesAgo);
    }
  };

  const getCasesByCountries = async () => {
    const [err, countryLatest] = await getAllCountries();
    const [error, countryPrev] = await getAllCountries({ yesterday: true });
    if (err || error) return;

    setCountries({
      latest: countryLatest.data,
      previous: countryPrev.data,
    });
  };

  const getHistorical = async () => {
    const [err, history] = await getAllHistorical();
    const [e, countriesHistory] = await getAllHistoricalByCountry();
    if (err || e) return;
    setHistorical({
      overall: countriesHistory.data,
      countries: history.data,
    });
  };

  const refetch = time => {
    const remainingSecond = refecthTime - miliseconds(time);
    interval = setInterval(() => {
      setShouldFetch(!shouldFetch);
    }, remainingSecond);
  };

  const onSelectCountry = c => {
    setCountry(c);
    setActiveTab(new Set([tabs[0]]));
    const { latest, previous } = getCountry(countries, { country: c });

    setRenderData(renderableData(latest, previous, false));
    setData({ ...data, today: false, myCountry: false });
  };

  const onRemoveCountry = () => {
    const { latest, previous } = data;
    setCountry('');
    setActiveTab(new Set([tabs[0]]));
    setRenderData(renderableData(latest, previous, false));
  };

  const myCountryCases = getCountry(countries, myCountry);

  const handleTabChange = tab => {
    setActiveTab(new Set([tab]));
    const { latest, previous } =
      country === '' ? data : getCountry(countries, { country });

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
          renderableData(myCountryCases.latest, myCountryCases.previous, false),
        );
        setData({ ...data, today: false, myCountry: true });
        break;
      default:
        setRenderData(renderableData(latest, previous, false));
        setData({ ...data, today: false, myCountry: false });
    }
  };

  return (
    <Layout country={country} active={activeTab.values().next().value}>
      <TabWrapper>
        <>
          {tabs.map(t => (
            <TabButton
              key={t}
              onClick={() => handleTabChange(t)}
              active={activeTab.has(t)}
            >
              {t}
            </TabButton>
          ))}
          <CountryDropdown
            countries={countries.latest}
            onClick={onSelectCountry}
            onRemove={onRemoveCountry}
          />
        </>
      </TabWrapper>

      <RenderCard
        data={renderData}
        today={data.today}
        myCountry={data.myCountry}
      />
      {historical.overall && (
        <DrawBarChart title="Confirmed" data={historical.overall.cases} />
      )}
    </Layout>
  );
}

HomePage.propTypes = {
  intl: object,
};

export default injectIntl(HomePage);

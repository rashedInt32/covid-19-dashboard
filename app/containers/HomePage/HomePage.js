import React, { useEffect, useState, useContext } from 'react';
import { object } from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

import Layout from 'components/Layouts';
import Grid from 'components/Grid';
import TabButton from 'components/TabButton';
import Box from 'components/Box';
import { miliseconds } from 'utils/miliseconds';
import DrawBarChart from 'components/Chart/BarChart';
import DrawAreaChart from 'components/Chart/AreaChart';
import DrawLineChart from 'components/Chart/LineChart';

import {
  getAllCases,
  getAllCountries,
  getAllHistorical,
  getAllHistoricalByCountry,
} from './HomeApi';
import { renderableData } from './renderableData';
import { renderableHistory } from './renderableHistory';
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
  const [renderData, setRenderData] = useState({});
  // Cases by country
  const [countries, setCountries] = useState({});
  // Timeline, last 30days
  const [historical, setHistorical] = useState({});
  const [renderHistorical, setRenderHistorical] = useState({});
  const [country, setCountry] = useState('');
  const [shouldFetch, setShouldFetch] = useState(false);
  const [activeTab, setActiveTab] = useState(new Set([tabs[0]]));

  useEffect(() => {
    getWorldWideCases();
    return () => clearInterval(interval);
  }, [shouldFetch]);

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

    if (latest.data && previous.data) {
      await getHistorical();
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
    if (history.data) {
      await getCasesByCountries();
    }
    setRenderHistorical(countriesHistory.data);
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
    setRenderHistorical(renderableHistory(historical.countries, c));
  };

  const onRemoveCountry = () => {
    const { latest, previous } = data;
    setCountry('');
    setActiveTab(new Set([tabs[0]]));
    setRenderData(renderableData(latest, previous, false));
    setRenderHistorical(historical.overall);
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
        setRenderHistorical(
          renderableHistory(historical.countries, myCountry.country),
        );
        setData({ ...data, today: false, myCountry: true });
        break;
      default:
        setRenderData(renderableData(latest, previous, false));
        setData({ ...data, today: false, myCountry: false });
        setRenderHistorical(historical.overall);
    }
  };

  return (
    <Layout country={country} active={activeTab.values().next().value}>
      <>
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
        <Grid className="container">
          <DrawBarChart title="Cases" data={renderHistorical.cases} />
          <DrawAreaChart title="Recovered" data={renderHistorical.recovered} />
          <DrawLineChart title="Deaths" data={renderHistorical.deaths} />
        </Grid>
      </>
    </Layout>
  );
}

HomePage.propTypes = {
  intl: object,
};

export default injectIntl(HomePage);

import React, { useEffect, useState } from 'react';
import Layout from 'components/Layouts';
import { getAllCases } from './HomeApi';

function HomePage() {
  const [data, setData] = useState({ latest: [], previous: [] });

  useEffect(() => {
    getLatestData();
  }, []);

  const getLatestData = async () => {
    const [err, latest] = await getAllCases();
    const [error, previous] = await getAllCases({ yesterday: true });
    if (err || error) return;
    setData({ latest: latest.data, previos: previous.data });
  };

  return <Layout />;
}

export default HomePage;

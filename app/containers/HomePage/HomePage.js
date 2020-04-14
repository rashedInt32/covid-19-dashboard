import React, { useEffect, useState } from 'react';
import Layout from 'components/Layouts';
import { getAllCases } from './HomeApi';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getLatestData();
  }, []);

  const getLatestData = async () => {
    const [err, latest] = await getAllCases();
    const [error, yesterday] = await getAllCases({ yesterday: true });
    if (err || error) return;
    console.log(latest.data);
    console.log(yesterday.data);

    //setData(response.data);
  };

  return <Layout />;
}

export default HomePage;

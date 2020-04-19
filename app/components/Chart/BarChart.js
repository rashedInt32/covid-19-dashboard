import React from 'react';
import { string, object } from 'prop-types';
import styled from 'styled-components';
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Grid } from '@material-ui/core';
import CustomBar from './CustomBar';
import CustomTooltip from './CustomToolTip';

const ChartWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.white};
  padding: 15px 20px 40px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;

const Title = styled.h4`
  position: relative;
  padding: 0px 20px 15px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBg};
  margin: 0 -20px 15px;
`;

const DrawBarChart = ({ title, data }) => {
  let modifiedData = Object.entries(data);
  modifiedData = modifiedData.map(item => {
    const objectOfArry = { name: item[0], cases: item[1] };
    return objectOfArry;
  });
  return (
    <Grid item md={4}>
      <ChartWrapper>
        <Title>{title}</Title>
        <ResponsiveContainer>
          <BarChart
            width={600}
            height={300}
            data={modifiedData}
            margin={{
              right: 0,
              bottom: 30,
            }}
          >
            <Tooltip content={<CustomTooltip />} />
            <YAxis type="number" hide />
            <XAxis
              type="category"
              dataKey="name"
              tick={false}
              tickLine={false}
              hide
            />
            <Bar
              dataKey="cases"
              shape={<CustomBar />}
              maxBarSize={30}
              minPointSize={0}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Grid>
  );
};

DrawBarChart.propTypes = {
  title: string,
  data: object,
};

export default DrawBarChart;

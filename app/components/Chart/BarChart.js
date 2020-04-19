import React from 'react';
import { string, object } from 'prop-types';
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
import ChartWrapper from './ChartWrapper';
import ChartTitle from './ChartTitle';

const DrawBarChart = ({ title, data }) => {
  let modifiedData = Object.entries(data);
  modifiedData = modifiedData.map(item => {
    const objectOfArry = { name: item[0], cases: item[1] };
    return objectOfArry;
  });
  return (
    <Grid item md={4}>
      <ChartWrapper>
        <ChartTitle>{title}</ChartTitle>
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
            <Tooltip content={<CustomTooltip name="Cases" color="#f9345e" />} />
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

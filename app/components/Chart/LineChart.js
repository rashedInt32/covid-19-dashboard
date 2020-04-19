import React from 'react';
import { string, object } from 'prop-types';
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Grid } from '@material-ui/core';
import CustomTooltip from './CustomToolTip';
import ChartWrapper from './ChartWrapper';
import ChartTitle from './ChartTitle';

const DrawLineChart = ({ title, data }) => {
  let modifiedData = Object.entries(data);
  modifiedData = modifiedData.map(item => {
    const objectOfArry = { name: item[0], deaths: item[1] };
    return objectOfArry;
  });
  return (
    <Grid item md={4}>
      <ChartWrapper>
        <ChartTitle>{title}</ChartTitle>
        <ResponsiveContainer>
          <LineChart
            width={600}
            height={300}
            data={modifiedData}
            margin={{
              right: 0,
              bottom: 30,
            }}
          >
            <Tooltip
              content={<CustomTooltip name="Deaths" color="#fa6400" />}
            />
            <YAxis type="number" hide />
            <XAxis type="category" hide />
            <Line
              type="monotone"
              dataKey="deaths"
              stroke="#6236ff"
              fillOpacity={1}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Grid>
  );
};

DrawLineChart.propTypes = {
  title: string,
  data: object,
};

export default DrawLineChart;

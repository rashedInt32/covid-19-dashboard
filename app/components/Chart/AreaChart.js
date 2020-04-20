import React, { useContext } from 'react';
import { string, object } from 'prop-types';
import { ThemeContext } from 'styled-components';
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Grid } from '@material-ui/core';

import CustomTooltip from './CustomToolTip';
import ChartWrapper from './ChartWrapper';
import { makeChartData } from './chartData';

const DrawAreaChart = ({ title, data }) => {
  const themeContext = useContext(ThemeContext);
  const modifiedData = makeChartData(data, 'recovered');
  return (
    <Grid item md={4}>
      <ChartWrapper
        title={title}
        data={modifiedData}
        loaderColor={themeContext.colors.success}
      >
        <ResponsiveContainer>
          <AreaChart
            width={600}
            height={300}
            data={modifiedData}
            margin={{
              right: 0,
              bottom: 30,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="2%" stopColor="#1cb142" stopOpacity={0.5} />
                <stop offset="98%" stopColor="#1cb14285" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              content={<CustomTooltip name="Recovered" color="#1cb142" />}
            />
            <YAxis type="number" hide />
            <XAxis type="category" hide />
            <Area
              type="monotone"
              dataKey="recovered"
              stroke="#1cb142"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Grid>
  );
};

DrawAreaChart.propTypes = {
  title: string,
  data: object,
};

export default DrawAreaChart;

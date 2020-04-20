import React, {useContext} from 'react';
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
import { ThemeContext } from 'styled-components';

import CustomTooltip from './CustomToolTip';
import ChartWrapper from './ChartWrapper';
import { makeChartData } from './chartData';

const DrawLineChart = ({ title, data }) => {
  const themeContext = useContext(ThemeContext);
  const modifiedData = makeChartData(data, 'deaths');
  return (
    <Grid item md={4} xs={12}>
      <ChartWrapper
        title={title}
        loaderColor={themeContext.colors.primary}
        data={modifiedData}
      >
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

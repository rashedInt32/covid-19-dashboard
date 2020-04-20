import React, {useContext} from 'react';
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
import { ThemeContext } from 'styled-components';

import CustomBar from './CustomBar';
import CustomTooltip from './CustomToolTip';
import ChartWrapper from './ChartWrapper';
import { makeChartData } from './chartData';

const DrawBarChart = ({ title, data }) => {
  const themeContext = useContext(ThemeContext);
  const modifiedData = makeChartData(data, 'cases');
  return (
    <Grid item md={4}>
      <ChartWrapper
        title={title}
        loaderColor={themeContext.colors.danger}
        data={modifiedData}
      >
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

import React from 'react';
import { array } from 'prop-types';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';

import { mapOptions } from './mapOptions';
import 'echarts/map/js/world';
import 'echarts/theme/gray';
const themeName = 'gray';

const Map = ({ countries }) => (
  <ReactEchartsCore
    echarts={echarts}
    option={mapOptions(countries)}
    style={{ height: '500px', width: '100%' }}
    className="react_for_echarts"
    theme={themeName}
  />
);

Map.propTypes = {
  countries: array,
};

export default Map;

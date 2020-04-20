import _ from 'lodash';
export const makeChartData = (data, value) => {
  if (_.isEmpty(data)) return;
  const d = Object.entries(data).map(item => {
    const objectOfArry = { name: item[0], [value]: item[1] };
    return objectOfArry;
  });
  // eslint-disable-next-line consistent-return
  return d;
};

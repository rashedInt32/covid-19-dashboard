import _ from 'lodash';
export const makeChartData = (data, value) => {
  if (_.isEmpty(data)) return;
  let d = Object.entries(data);
  d = d.map((item, i) => {
    const previousItem = d[i - 1];
    const objectOfArry = {
      name: item[0],
      [value]: previousItem ? item[1] - _.last(previousItem) : item[1],
    };
    return objectOfArry;
  });
  d = _.drop(d);
  // eslint-disable-next-line consistent-return
  return d;
};

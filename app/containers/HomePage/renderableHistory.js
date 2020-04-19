import _ from 'lodash';

export const renderableHistory = (data, country) => {
  const countryHistory = _.filter(data, c => c.country === country);
  return countryHistory[0].timeline;
};

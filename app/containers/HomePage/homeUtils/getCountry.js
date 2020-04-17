import _ from 'lodash';

export const getCountry = (countries, myCountry) => {
  const latest = _.find(countries.latest, c => c.country === myCountry.country);
  const previous = _.find(
    countries.previous,
    c => c.country === myCountry.country,
  );
  return { latest, previous };
};

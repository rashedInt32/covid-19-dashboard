import _ from 'lodash';

export const getCountry = (countries, country) => {
  const compare = country.countryCode
    ? country.countryCode
    : country.countryInfo.iso2;

  const latest = _.find(countries.latest, c => c.countryInfo.iso2 === compare);
  const previous = _.find(
    countries.previous,
    c => c.countryInfo.iso2 === compare,
  );
  return { latest, previous };
};

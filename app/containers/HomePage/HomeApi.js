/* eslint-disable no-return-await */
import to from 'await-to-js';

import { request } from 'utils/request';
import {
  getCases,
  getCountries,
  historical,
  historicalAll,
} from 'utils/apiRoutes';

const getAllCases = async obj => await to(request.get(getCases(obj)));

const getAllCountries = async obj => await to(request.get(getCountries(obj)));

const getAllHistorical = async () => await to(request.get(historical));

const getAllHistoricalByCountry = async () =>
  await to(request.get(historicalAll));

export {
  getAllCases,
  getAllCountries,
  getAllHistorical,
  getAllHistoricalByCountry,
};

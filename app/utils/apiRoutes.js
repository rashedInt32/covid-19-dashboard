export const baseURL = 'https://corona.lmao.ninja/v2';
export const getCases = obj => `/all?yesterday=${obj ? obj.yesterday : false}`;
export const getCountries = obj =>
  `/countries?yesterday=${obj ? obj.yesterday : false}`;

export const historical = `/historical?lastdays=30`;
export const historicalAll = `/historical/all?lastdays=30`;

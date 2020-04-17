export const baseURL = 'https://corona.lmao.ninja/v2';
export const getCases = obj => `/all?yesterday=${obj ? obj.yesterday : false}`;
export const getCountries = () => `/countries`;

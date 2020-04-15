export const getPercent = (today, yesterday, value) => {
  const diff = today[value] - yesterday[value];
  const result = ((diff / yesterday[value]) * 100).toFixed(2);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(result)) return 0;
  return result;
};

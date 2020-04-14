import to from 'await-to-js';

import { request } from 'utils/request';
import { getCases } from 'utils/apiRoutes';

const getAllCases = async obj => {
  const [err, resp] = await to(request.get(getCases(obj)));
  return [err, resp];
};

export { getAllCases };

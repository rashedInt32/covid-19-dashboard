import axios from 'axios';
import { baseURL } from 'utils/apiRoutes';

const request = axios.create({
  baseURL,
  timeout: 10000,
});

export { request };

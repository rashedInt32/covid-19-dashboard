import axios from 'axios';
import { baseURL } from 'utils/apiRoutes';

const request = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export { request };

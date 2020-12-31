/**
 * app/config/api
 * ---
 * We use apisauce to communicate with external services.
 * Read more here: https://github.com/infinitered/apisauce
 */

import { create } from 'apisauce';
import { getAPIUrl } from './config';

export const TestAPI = create({
  baseURL: getAPIUrl()
});

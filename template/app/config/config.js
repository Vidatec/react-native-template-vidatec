/**
 * app/config/config
 * ---
 * Expose configuration options as helper functions, etc
 */

import Config from 'react-native-config';

/**
 * Returns the API_URL defined in the .env
 * @returns {String}
 */
export const getAPIUrl = () => {
  return Config.API_URL || null;
};

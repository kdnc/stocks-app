import {ERROR_OCCURRED, MAINTENANCE_ERROR, NETWORK_REQUEST_FAILED} from "./Constants";

/**
 * Invoke a GET request
 * @param {string} url - URL to invoke
 * @return {Promise} Promise of the API invocation
 */
export const invokeJsonGet = (url) => {
  const apiHeaders = {
    'Content-Type': 'application/json',
  };
  const opts = {
    method: 'GET',
    headers: apiHeaders,
  };
  return invokeApi(url, opts);
};

/**
 * Invoke the generic API request
 * @param {string} url - URL to invoke
 * @param {object} opts - Header options to include with the request
 * @return {Promise} Promise of the API invocation
 */
export const invokeApi = (url, opts) => {
  return new Promise((resolve, reject) => {
    fetch(url, opts)
      .then(response => {
        if (!response.ok) {
          throw Error('Error occurred');
        }
        return response;
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.errorCode !== undefined) {
          if (data.errorCode === 401) {
            reject({
              errorCode: 401,
              errorMessage: data.msg,
            });
          } else {
            reject({
              errorCode: 500,
              errorMessage: data.msg,
            });
          }
        } else {
          resolve(data);
        }
      })
      .catch(error => {
        let errorMessage = ERROR_OCCURRED;
        if (error.message === NETWORK_REQUEST_FAILED) {
          errorMessage = MAINTENANCE_ERROR;
        }
        reject({
          errorCode: 500,
          errorMessage,
        });
      });
  });
};